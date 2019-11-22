import React, { Component } from "react";

class PlusMinus extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
  }

  addOne = () => {
    this.setState({
      score: this.state.score + 1
    });
  };

  minusOne = () => [
    this.setState({
      score: this.state.score - 1
    })
  ];

  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <h3 className="text-center mt-5">
            Class Score is: {this.state.score}
          </h3>
          <ul className="list-group">
            <li className="list-group-item mt-2 text-center">
              Precision Run | Jack McGowan
            </li>
            <div className="mt-3 d-flex justify-content-center">
              <button className="btn btn-primary mr-2" onClick={this.addOne}>
                I like this class
              </button>
              <button className="btn btn-danger ml-2" onClick={this.minusOne}>
                I hate this class
              </button>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default PlusMinus;
