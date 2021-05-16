class LogIn extends React.Component {
  render = () => {
    return (
      <div>
        <h1>Sign In</h1>
        <form className="mx-auto" style={formStyle} action="">
          <label htmlFor="username"></label>
          <input className="form-control mb-2" type="text" name="username" id="username" placeholder="USERNAME" required />

          <label htmlFor="password"></label>
          <input className="form-control" type="text" name="password" id="password" placeholder="PASSWORD" required />

          <input style={buttonStyle} className="btn btn-primary mt-2" type="submit" value="Submit" />
        </form>

      </div>
    )

  }
}

const formStyle = {
  maxWidth: "50%"
}

