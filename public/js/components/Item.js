class Item extends React.Component {
  render = () => {
    return (
      <div className="card bg-light mb-4 mx-auto" style={cardStyle}>
        <div className="card-header">{this.props.item.category}</div>
        <div className="card-body">
          <h3 className="card-title">{this.props.item.name}</h3>
          <p className="card-text">{this.props.item.desc}</p>
          <button className="btn btn-dark">Add Item</button>
        </div>

      </div>
    )
  }
}

const cardStyle = {
  maxWidth: "50%"
}