const Switch = ReactRouterDOM.Switch
const Link = ReactRouterDOM.Link
const Route = ReactRouterDOM.Route
const Redirect = ReactRouterDOM.Redirect
const History = ReactRouterDOM.History

class App extends React.Component {
  state = {
    currentUser: '',
    items: [],
    // toFeed: false,
    // history: History
  }

  // handleSignin = (event) => {
  //   event.preventDefault()
  //   axios.get('/users/signin').then((response) => {
  //     console.log(event)
  //     // console.log(response.data.bucketItems)
  //     this.setState({
  //       currentUser: response.data,
  //       items: response.data.bucketItems
  //     })
  //   })
  // }

  ////////////////////////////
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios
      .post('/bucketitems', this.state)
      .then(response =>
        this.setState({
          items: response.data,
          category: '',
          name: '',
          desc: '',
        })
      )
    // {
    //   this.state.toFeed === true ?
    //     this.setState({
    //       toFeed: false
    //     })
    //     : this.setState({
    //       toFeed: true
    //     })
    // }
    // this.handleFeed()
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

  // handleFeed = () => {
  //   { this.state.toFeed === true ? this.state.history.push('/feed') : null }
  // }

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
                    <Link className="nav-link" to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/feed'>Feed</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/addItem'>Add an Item</Link>
                  </li>
                  {/* <li class="nav-item">
                    <Link className="nav-link" to='/signin'>Log In</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to='/signup'>Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/useritems'>My Bucket List</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>


          <div className="content">
            <Switch>
              <Route exact path='/'>
                <h1>Welcome fellow Bucket-Kicker!</h1>
                <div className="welcome-text">
                  <div className="about">
                    <h3>Why "Kick the Bucket" ?</h3>
                    <p>A nice reminder that death is inevitable and it wouldn't be fun to go to the after life and tell stories about what you did in the land of the living! It is also a little somewhat play on words to reference a Bucket List.</p>
                  </div>
                  <div className="bucket-list">
                    <h3>What is a "Bucket List" ?</h3>
                    <p>A Bucket-List is a list of a number of experiences/achievements that a person hopes to have or accomplish during their lifetime.</p>
                    <p>A bucket-list can be created at any point of time of a person's life. The only question to ask oneself is "What do you want to do?" followed by "How much do you want it?"</p>
                    <p>Disregarding the more unacceptable items based on society of today (such as murder, homicide, and/or possibly anything that can get you arrested and more.), best place to begin building the list is to ask yourself "What were the things you wanted to do as a kid?"</p>
                  </div>
                  <div className="quotes">
                    <h4>Here are some Inspirational quotes to get you moving:</h4>
                    <ul className="quotes-text">
                    <p>
                      <li>"As soon as anyone starts telling you to be realistic, cross that person off your invitation list." - John Eliot</li>
                      <li>"We all have two choices; we can make a living or we can design a life." - Jim Rohn</li>
                      <li>"By recording your dreams and goals on paper, you set in motion the process of becoming the person you most want to be." - Mark Victore Hansen</li>
                    </p>
                    </ul>
                  </div>
                  <h1>Good Luck Bucket-kicker!</h1>
                </div>
              </Route>

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



              {/* <Redirect from="/addItem" to="/feed" /> */}

              {/* <Route path='/signin'>
                <LogIn />
              </Route>
              <Route path='/signup'>
                <SignUp />
              </Route>
              <Route path='/useritems'>
                <UserItems />
              </Route> */}
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
