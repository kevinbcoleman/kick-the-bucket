// console.log('hello world');


class App extends React.Component{
  state = {
    currentUser: '',
  }
  handleSignin = (event) => {
    event.preventDefault()
    axios.get('/users/signin').then((response) => {
      this.setState({
        console.log(response.data)
        currentUser: response.data,
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
