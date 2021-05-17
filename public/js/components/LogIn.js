// class LogIn extends React.Component {
//   state = {
//     currentUser: {},
//     username: '',
//     password: ''
//   }
//   onChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   // const { username, password } = this.state

  //   axios.get('/users/signin').then((response) => {
  //     this.setState({
  //       currentUser: response.data
  //     })
  //     console.log(currentUser)
  //   })
  // }
  // handleSignin = (event) => {
  //   event.preventDefault()
  //   axios.get('/users/signin').then((response) => {
  //     console.log(event)
  //     // console.log(response.data.bucketItems)
  //     this.setState({
  //       currentUser: response.data._id,
  //       username: response.data.username,
  //       // items: response.data.bucketItems
  //     })
  //     console.log(this.state.currentUser)
  //   })
  // }
  // render = () => {
    // const { username, password } = this.state

//     return (
//       <div>
//         <form className="mx-auto" style={formStyle} onSubmit={this.handleSignin}>
//           <header>
//             <h1>Log In</h1>
//           </header>
//           <label htmlFor="username"></label>
//           <input
//             className="form-control mb-2"
//             type="text"
//             name="username"
//             id="username"
//             value={this.state.username}
//             placeholder="USERNAME" required
//             onChange={this.onChange}
//           />

//           <label htmlFor="password"></label>
//           <input className="form-control"
//             type="text" name="password"
//             id="password"
//             value={this.state.password}
//             placeholder="PASSWORD"
//             required
//             onChange={this.onChange}
//           />

//           <input className="btn btn-primary mt-2" type="submit" value="Submit" />
//         </form>

//       </div>
//     )

//   }
// }

// const formStyle = {
//   maxWidth: "50%"
// }
