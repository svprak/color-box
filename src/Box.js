import React from 'react';
import './Box.css';
import { randomHexColor } from './helpers';
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.handleMakeColor = this.handleMakeColor.bind(this);
  }

  handleMakeColor() {
    this.props.makeColor();
  }
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            backgroundColor: randomHexColor(),
            width: '200px',
            height: '200px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
          onClick={this.handleMakeColor}
        ></div>
      </div>
    );
  }
}
export default Box;
