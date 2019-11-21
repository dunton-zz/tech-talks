import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    if (name === "FirstName") {
      this.setState({
        firstName: value
      });
      return;
    }

    this.setState({
      lastName: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3 form-group mt-5">
          <h3 className="text-center mt-5">Here's a Form for Equinox</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
              name="FirstName"
              className="form-control form-control-lg mt-4"
            />
            <input
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
              name="LastName"
              className="form-control form-control-lg mt-2"
            ></input>
            <button className="btn btn-primary mt-4">submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
