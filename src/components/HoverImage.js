import React, { Component } from "react";

class HoverImage extends Component {
  constructor(props) {
    super(props);
    this.state = { isHover: false };
  }
  onMouseEnter() {
    this.setState({ isHover: true });
  }
  onMouseLeave() {
    this.setState({ isHover: false });
  }
  render() {
    console.log(this.props.children);
    return (
      <div
        style={{
          opacity: this.state.isHover ? 0.5 : 1
        }}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default HoverImage;
