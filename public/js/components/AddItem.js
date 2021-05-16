class AddItem extends React.Component {
  render = () => {
    return (
      <div>
        <form className='mx-auto' style={formStyle} onSubmit={this.props.onAdd}>
          <header>
            <h2>Add New Bucket List Item</h2>
          </header>
          <label htmlFor="category">Category</label>
          <input className='form-control' type="text" id="category" onChange={this.props.change} value={this.props.items.category} />

          <label htmlFor="name">Name</label>
          <input className='form-control' type="text" id="name" onChange={this.props.change} value={this.props.items.name} />

          <label htmlFor="image">Description</label>
          <input className='form-control' type="text" id="desc" onChange={this.props.change} value={this.props.items.desc} />

          <input className='btn btn-primary' type="submit" value="Add Item" />
        </form>
      </div>
    )
  }
}

const formStyle = {
  maxWidth: "50%"
}
