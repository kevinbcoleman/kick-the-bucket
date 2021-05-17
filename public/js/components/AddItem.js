class AddItem extends React.Component {
  // state = {
  //   toFeed: false
  // }
  render = () => {
    return (
      <div>
        <form className='mx-auto' style={formStyle} onSubmit={this.props.onAdd}>
          <header>
            <h2>Add New Bucket List Item</h2>
          </header>
          <label htmlFor="category"></label>
          <input className='form-control' type="text" id="category" placeholder='CATEGORY' onChange={this.props.change} value={this.props.items.category} />

          <label htmlFor="name"></label>
          <input className='form-control' type="text" id="name" placeholder='NAME' onChange={this.props.change} value={this.props.items.name} />

          <label htmlFor="image"></label>
          <input className='form-control' type="text" id="desc" placeholder='DESCRIPTION' onChange={this.props.change} value={this.props.items.desc} />

          <input className='btn btn-primary' type="submit" value="Add Item" />
        </form>
      </div>
    )
  }
}

const formStyle = {
  maxWidth: "50%"
}
