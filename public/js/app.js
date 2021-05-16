// console.log('hello world');
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;
const Switch = ReactRouterDOM.Switch
const Link = ReactRouterDOM.Link
const Route = ReactRouterDOM.Route

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

      <ReactRouterDOM.BrowserRouter>
        <div className="App">
          <nav className="navbar">
            <ul>
              <li>
                <Link to='/'>Feed</Link>
              </li>
              <li>
                <Link to='/signin'>Log In</Link>
              </li>
              <li>
                <Link to='/signup'>Sign Up</Link>
              </li>
              <li>
                <Link to='/useritems'>My Bucket List</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <Feed items={this.state.items} />
              </Route>

              <Route path='/signin'>
                <LogIn />
              </Route>

              <Route path='/signup'>
                <SignUp />
              </Route>

              <Route path='/useritems'>
                <UserItems />
              </Route>
            </Switch>
          </div>
          {/* <div>
            <h1>Hello There</h1>
            <Feed items={this.state.items} />
          </div> */}
        </div>
      </ReactRouterDOM.BrowserRouter>





    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector("main")
)
