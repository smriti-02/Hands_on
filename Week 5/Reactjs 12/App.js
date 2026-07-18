import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Ticket Booking App</h1>

        {this.state.isLoggedIn ? (
          <>
            <button onClick={this.logout}>
              Logout
            </button>

            <User />
          </>
        ) : (
          <>
            <button onClick={this.login}>
              Login
            </button>

            <Guest />
          </>
        )}
      </div>
    );
  }
}

export default App;