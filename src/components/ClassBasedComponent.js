import React, { Component } from "react";

class ClassBasedComponent extends Component {
  constructor() {
    super();
  }
  handleClickArrow = () => {
    console.log(this);
  };
  handleClick() {
    console.log(this);
  }
  render() {
    console.log(this);
    return (
      <>
        <div onClick={this.handleClickArrow}>Arrow func</div>
        <div onClick={this.handleClick}>Regular func</div>
      </>
    );
  }
}

export default ClassBasedComponent;
