class Item extends React.Component {
  render = () => {
    return (
      <div className="card bg-light mb-4 mx-auto" style={cardStyle}>
        <div className="card-header">{this.props.item.category}</div>
        <div className="card-body">
          <h3 className="card-title">{this.props.item.name}</h3>
          <p className="card-text">{this.props.item.desc}</p>


          <details >
            <summary className='btn btn-dark'>Edit</summary>

            <form id={this.props.item._id} onSubmit={this.props.onSubmit}>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                onChange={this.props.onChange}
                className='form-control'
              />

              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={this.props.onChange}
                className='form-control'
              />

              <label htmlFor="desc">Description</label>
              <input
                type="text"
                id="desc"
                onChange={this.props.onChange}
                className='form-control'
              />
              <input className='btn btn-primary' type="submit" value="Update Item" />
            </form>
          </details>
          <button className='btn btn-danger' onClick={this.props.onClick} value={this.props.item._id}>DELETE</button>
        </div>

      </div >
    )
  }
}

const cardStyle = {
  maxWidth: "50%"
}
