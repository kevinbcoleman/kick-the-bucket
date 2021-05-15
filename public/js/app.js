// console.log('hello world');
// import Feed from './components/Feed.js'

class App extends React.Component {
  state = {
    currentUser: '',
    items: []
  }
  handleSignin = (event) => {
    event.preventDefault()
    axios.get('/users/signin').then((response) => {
      this.setState({
        currentUser: response.data,
      })
    })
  }
  componentDidMount = () => {
    axios.get('/bucketitems').then(response => {
      this.setState({
        items: response.data
      })
      console.log(response.data)
    })
  }
  //Hey Rach.
  render = () => {
    return (
      <div>
        <h1>Hello There</h1>
        <Feed items={this.state.items} />
      </div>




    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector("main")
)
