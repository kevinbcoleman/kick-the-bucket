class LogIn extends React.Component {
  render = () => {
    return (
      <div>
        <form className="mx-auto" style={formStyle} action="">
          <header>
            <h1>Log In</h1>
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

