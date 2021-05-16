class Feed extends React.Component {
  render = () => {
    return (
      <div className='mt-5'>
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


