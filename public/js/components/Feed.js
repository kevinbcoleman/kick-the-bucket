class Feed extends React.Component {
  render = () => {
    return (
      <div>
        { this.props.items.map((item) => (
          <Item
            key={item._id}
            item={item}
          />
        ))}
      </div>
    )
  }
}


