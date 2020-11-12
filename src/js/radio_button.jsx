import React from 'react';
import ReactDOM from 'react-dom';

export default class RadioButton extends React.Component {
  onChangeValue = (e) => {
    this.props.handleChange({
      type: e.target.name,
      riskFactor: e.target.value
    })
  }

  render() {
    const { subriskType, riskFactor } = this.props
    return (
      <div>
        <fieldset onChange={this.onChangeValue}>
          <legend>{subriskType}</legend>
          <input type="radio" name={subriskType} value="0" checked={riskFactor === "0"}/>0
          <input type="radio" name={subriskType} value="1" checked={riskFactor === "1"} />1
          <input type="radio" name={subriskType} value="2" checked={riskFactor === "2"}/>2
        </fieldset> 
      </div>
    )
  }
}