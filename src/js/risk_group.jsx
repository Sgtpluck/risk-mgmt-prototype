import React from 'react';
import ReactDOM from 'react-dom';
import RadioButton from './radio_button.jsx'

export default class RiskGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = { risk: props.risk }
  }

  handleChange = ({type, value, subriskType}) => {
    let newRisk = this.state.risk
    newRisk.subrisks[subriskType][type] = value

    this.setState({ risk: newRisk })

    this.props.handleChange(newRisk, this.props.idx)
  }

  render() {
    const { type, subrisks } = this.state.risk
    
    const subriskButtons = Object.keys(subrisks).map((subrisk, idx) => (
      <div>
        <p>{subrisk}</p> 
        <div style={{display: "flex"}}>
          <RadioButton 
            handleChange={this.handleChange.bind(this)}
            subriskType={subrisk}
            type="likelihood"
            key={`likelihood-${idx}`}
          />

          <RadioButton 
            handleChange={this.handleChange.bind(this)}
            subriskType={subrisk}
            type="impact_level"
            key={`impact-level-${idx}`}
          />
        </div>
      </div>
    ))

    return (
      <div>
        <h1>{type}</h1>
        { subriskButtons }
        
        
      </div>
    )
  }
}