import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

export default class WhileTyping extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: undefined,
      typing: false,
      typingTimeout: 0
    };

    this.whileTyping = this.whileTyping.bind(this);
  }

  callback = (value) => {
    this.props.callback(this.props.formControl.name, value);
  }

  whileTyping = (e) => {
    const valueTyped = e.target.value;
    this.setState({ value: valueTyped });

    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }

    // After typing
    this.setState({
      typing: false,
      typingTimeout: setTimeout(() => {
        this.callback(valueTyped);
      }, 500)
    });
  }

  render() {

    return (
      <FormControl
        className={this.props.formControl.className}
        type={this.props.formControl.type}
        autoComplete={this.props.formControl.autoComplete}
        maxLength={this.props.formControl.maxLength}
        placeholder={this.props.formControl.placeholder}
        onChange={(e) => this.whileTyping(e)}
      />
    )
  }
}