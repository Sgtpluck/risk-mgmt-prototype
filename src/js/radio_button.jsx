import React from 'react';
import ReactDOM from 'react-dom';

export default class RadioButton extends React.Component {
  onChangeValue = (e) => {
    this.props.handleChange({
      subriskType: this.props.subriskType,
      value: e.target.value,
      type: this.props.type
    })
  }

  renderInputs() {
    const { subriskType, type } = this.props
    let inputs = []

    for (let step = 0; step <= 10; step++) {
      inputs.push(
        <span><input type="radio" name={`${subriskType}-${type}`} value={step} />{step}</span>
      )
    }

    return inputs
  }

  render() {
    const legend = this.props.type.split("_").join(" ")
    return (
      <div>
        <fieldset onChange={this.onChangeValue}>
          
          <legend>{legend}</legend>
          
          {this.renderInputs()}
        </fieldset> 
      </div>
    )
  }
}