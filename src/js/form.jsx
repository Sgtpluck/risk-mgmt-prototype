import React from 'react';
import ReactDOM from 'react-dom';
import RiskGroup from './risk_group.jsx'
import risks from '../data/risks.json'

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      risks: risks
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.props.handleSubmit(this.state.risks)
  }

  handleChange(newChange, idx) {
    let newRisks = this.state.risks
    newRisks[idx] = newChange

    this.setState({
        risks: newRisks
      }
    )
  }

  render() {

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {
            this.state.risks.map((risk, idx) =>
            <div key={idx}>{
              <RiskGroup idx={idx} handleChange={this.handleChange.bind(this)} risk={risk} />
            }</div>
            )
          }
          <input type="submit" />
        </form>
      </div>
    )
  }
}