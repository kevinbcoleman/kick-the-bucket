// console.log('hello world');


class App extends React.Component{
  state = {
    currentUser: '',
    username: ''
  }
  handleSignin = (event) => {
    event.preventDefault()
    axios.get('/users/signin').then((response) => {
      this.setState({
        console.log(response.data)
        currentUser: response.data,
        username: response.data.username
      })
    })
  }
  render = () => {
    return(
      <h1>Hello There</h1>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector("main")
)
