import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryAxis, VictoryChart, VictoryScatter, VictoryTheme } from 'victory';


export default class Graph extends React.Component {
  render() {
    const axisStyle = {
      axis: {stroke: "#756f6a"},
      axisLabel: {fontSize: 20, padding: 30}
    }

    return (
      <div>
        <VictoryChart
          domain={{ x: [0, 10], y: [0, 10] }}
          theme={VictoryTheme.material}
        >
          <VictoryScatter  
            size={7}
            data={this.props.data}
            style={{
              data: {
                fill: ({ fill }) => ( fill ? fill : "#756f6a" )
              }
            }}
            x="likelihood"
            y="impact_level"
          />
          <VictoryAxis
            label="Likelihood"
            style={axisStyle}
          />
          <VictoryAxis
            label="Impact"
            dependentAxis
            style={axisStyle}
          />
            
        </VictoryChart>
      </div>
    );
  }
}