import React, { Component } from "react";
// import { createBrowserHistory } from 'history';
import "./login.css";
import { withRouter } from 'react-router-dom';

class Loginpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  formSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const { history } = this.props;

    if (history && email === "admin@gmail.com" && password === "123") {
        
     history.push('/Admin');
    
        // createBrowserHistory().push('/admin');
    } else {
      history.push('/product');
        // createBrowserHistory().push('/product');
    }
    e.preventDefault();
  }

    redirectToHome = () => {
      const { history } = this.props;
      if(history) history.push('/');
     }

  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <form>
          <div id="form">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="Your name.."
              required
            />

            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              placeholder="Your Password.."
              required
            />

            <button
              className="mainbutton"
              type="submit"
              value="Submit"
              onClick={this.formSubmit.bind(this)}
            >
              Submit
            </button>
            <p id="loginpara">
              Don't have Account: <a href="/">SignUp here</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Loginpage)