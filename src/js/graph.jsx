import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory';


export default class Graph extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart
          domain={{ x: [0, 5], y: [0, 7] }}
          theme={VictoryTheme.material}
        >
          <VictoryScatter  
            style={{ data: { fill: "#c43a31" } }}
            size={7}
            data={this.props.data} 
          />
            
        </VictoryChart>
      </div>
    );
  }
}