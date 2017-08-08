import React from 'react';

class TwitterMessage extends React.Component {
  constructor() { 
    super();

    this.state = {
      value: '',
      characters: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      characters: (this.props.maxChars - event.target.value.toString().length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.state.characters}</p>
        <p>Max Chars: {this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
