class SignUp extends React.Component {
  handleSubmit = (data) => {
    event.preventDefault()
    console.log('form data', data)
  }
  render = () => {
    return (
      <div>
        <form className="mx-auto" style={formStyle} onSubmit={this.handleSubmit} >
          <header>
            <h1>Create an Account</h1>
          </header>
          <label htmlFor="username"></label>
          <input className="form-control mb-2" type="text" name="username" id="username" placeholder="USERNAME" required />

          <label htmlFor="password"></label>
          <input className="form-control" type="text" name="password" id="password" placeholder="PASSWORD" required />

          <input className="btn btn-primary mt-2" type="submit" value="Submit" />
        </form>
      </div>
    )

  }
}

const formStyle = {
  maxWidth: "50%"
}
