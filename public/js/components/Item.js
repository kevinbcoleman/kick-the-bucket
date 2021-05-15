class Item extends React.Component {
  render = () => {
    return (
      <div>
        <h3>{this.props.item.name}</h3>
        <p>{this.props.item.desc}</p>
        <button>Add Item</button>
      </div>
    )
  }
}