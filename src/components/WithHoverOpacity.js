import React, { Component } from "react";

export default function (WrapComponent, opacity) {
  return class extends Component {
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
            opacity: this.state.isHover ? opacity : 1
          }}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        >
          <WrapComponent {...this.props} />
        </div>
      );
    }
  };
}
