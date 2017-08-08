import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      showError: true
    };
  }

  checkValid = (event) => {
    this.setState({
      poem: event.target.value,
      showError: true
    })
    let poemNoNewLine = event.target.value.replace(/(\r\n|\n|\r)/gm, "")
    let poemArr = poemNoNewLine.split(' ').filter(n => n)
    debugger;
    if(poemArr.length === 13){
      this.setState({
        showError: false
      }) //
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.checkValid}
        />
      {this.state.showError ? <div
        id="poem-validation-error"
        style={{color: 'red'}}
      >
        This poem is not written in the right structure!
      </div> : null}

      </div>
    );
  }
}

export default PoemWriter;
