import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './graph.jsx'
import Form from './form.jsx'

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = { showGraph: false, data: [{}] }
  }

  handleSubmit = (risks) => {
    console.log(risks)

    this.setState({
      data: this.transformRisks(risks), 
      showGraph: true 
    })
  }

  transformRisks(risks) {
    const data = []
    risks.forEach((risk) => {
      const fill = risk.fill

      // this data structure is a mess yeesh
      Object.keys(risk.subrisks).forEach((subriskName) => {
        const axis = risk.subrisks[subriskName]
        data.push(
          {
            likelihood: parseInt(axis.likelihood),
            impact_level: parseInt(axis.impact_level),
            fill: fill,
            label: subriskName
          }
        )
      })
    })
    return data
  }

  render() {
    const graphStyle = {
      width: "30em",
      display: this.state.showGraph ? "block" : "none"
    }
    
    return (
      <div>
        <div className="form" >
          <Form handleSubmit={this.handleSubmit}/>
        </div>
        <div className="graph" style={graphStyle}>
          <Graph data={this.state.data}></Graph>
        </div>        
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);