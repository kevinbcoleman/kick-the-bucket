class Header extends React.Component {
  render = () => {
    return (
      <div style={headerStyle} id='app-name-container'>
        <h1 className='text-center mt-5' id='app-name'>Kick The Bucket</h1>
      </div>
    )
  }
}

const headerStyle = {
  height: '100px',
  backgroundColor: ''
}
