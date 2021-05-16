
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
  ////////////////////////////
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios
      .post('/bucketitems', this.state)
      .then(response =>
        this.setState({ items: response.data, category: '', name: '', desc: '' })
      )
  }


  updateItem = event => {
    event.preventDefault()
    const id = event.target.id
    axios.put('/bucketitems/' + id, this.state).then(response => {
      this.setState({
        items: response.data,
        category: '',
        name: '',
        desc: ''
      })
    })
  }

  deleteItem = event => {
    axios.delete('/bucketitems/' + event.target.value).then(response => {
      this.setState({
        items: response.data
      })
    })
  }


  ////////////////////////////

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
          <Header />
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/feed'>Feed</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/addItem'>Add an Item</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to='/signin'>Log In</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to='/signup'>Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/useritems'>My Bucket List</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>


          <div className="content">
            <Switch>
              <Route path='/feed'>
                <Feed
                  items={this.state.items}
                  onEdit={this.updateItem}
                  change={this.handleChange}
                  onDelete={this.deleteItem}
                />
              </Route>

              <Route path='/addItem'>
                <AddItem
                  onAdd={this.handleSubmit}
                  items={this.state.items}
                  change={this.handleChange}
                />
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

        </div>
      </ReactRouterDOM.BrowserRouter>





    )
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector("main")
)
