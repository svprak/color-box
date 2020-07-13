import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';
import { randomHexColor } from './helpers';

export default class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 21,
  };
  constructor(props) {
    super(props);
    this.state = {
      color: randomHexColor(),
    };
    this.handleHexColor = this.handleHexColor.bind(this);
  }
  handleHexColor(e) {
    this.setState({
      color: randomHexColor(),
    });
  }
  render() {
    // const boxes = Array.from({ length: this.props.numBoxes }).map((b) => (
    //   <Box color={this.state.color} makeColor={() => this.handleHexColor(b)} />
    // ));

    return (
      <div className="color-box-container">
        <h2>Random Color Boxes</h2>
        <div className="color-box">
          <Box color={this.state.color} makeColor={this.handleHexColor} />
          <Box color={this.state.color} makeColor={this.handleHexColor} />
          <Box color={this.state.color} makeColor={this.handleHexColor} />
        </div>
      </div>
    );
  }
}
