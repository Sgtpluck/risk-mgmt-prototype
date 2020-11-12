import React from 'react';
import ReactDOM from 'react-dom';
import RadioButton from './radio_button.jsx'

export default class RiskGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = { risk: props.risk }
  }

  handleChange = ({type, riskFactor}) => {
    let newRisk = this.state.risk
    newRisk.subrisks[type].risk_factor = riskFactor

    this.setState({ risk: newRisk })

    this.props.handleChange(newRisk, this.props.idx)
  }

  render() {
    const { type, subrisks } = this.state.risk
    const subriskButtons = Object.keys(subrisks).map((subrisk, idx) => (
      <RadioButton 
        handleChange={this.handleChange.bind(this)}
        subriskType={subrisk}
        riskFactor={subrisks[subrisk].risk_factor}
        key={idx} 
      />

      )
    )

    return (
      <div>
        <h1>{type}</h1>
        { subriskButtons }
        
        
      </div>
    )
  }
}