import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './graph.jsx'
import Form from './form.jsx'

const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 }
]

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = { showGraph: false }
  }

  render() {
    const graphStyle = {
      width: "30em",
      display: this.state.showGraph ? "block" : "none"
    }
    
    return (
      <div>
        <div className="form" >
          <Form />
        </div>
        <div className="graph" style={graphStyle}>
          <Graph data={data}></Graph>
        </div>        
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);