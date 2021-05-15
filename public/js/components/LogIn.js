class LogIn extends React.Component {
  render = () => {
    return (
      <div>
        <h1>Sign In</h1>
        <form className="mx-auto" style={formStyle} action="">
          <label className="form-control" htmlFor="username">User Name</label>
          <input type="text" name="username" id="username" required />

          <label className="form-control" htmlFor="password">Password</label>
          <input type="text" name="password" id="password" required />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )

  }
}

const formStyle = {
  maxWidth: "50%"
}

