class SignUp extends React.Component {
  state = {
    username: '',
    password: ''
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = this.state

    axios.post('/', { username, password }).then((response) => {
      console.log(response)
    })
  }
  render = () => {
    const { username, password } = this.state
    return (
      <div>
        <form className="mx-auto" style={formStyle} onSubmit={this.handleSubmit} >
          <header>
            <h1>Create an Account</h1>
          </header>
          <label htmlFor="username"></label>
          <input
            className="form-control mb-2"
            type="text"
            name="username" id="username"
            value={username}
            placeholder="USERNAME" required
            onChange={this.onChange}
          />

          <label htmlFor="password"></label>
          <input
            className="form-control"
            type="text"
            name="password" id="password"
            value={password}
            placeholder="PASSWORD" required
            onChange={this.onChange}
          />

          <input className="btn btn-primary mt-2" type="submit" value="Submit" />
        </form>
      </div>
    )

  }
}

const formStyle = {
  maxWidth: "50%"
}
