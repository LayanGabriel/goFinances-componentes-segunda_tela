import React from 'react';
import { VictoryPie } from 'victory-native';
import { View, Text } from 'react-native';
import { Svg } from 'react-native-svg';

const data = [
  { x: 'Casa', y: 1200 },
  { x: 'Carro', y: 700 },
  { x: 'Alimentação', y: 500 },
  { x: 'Alimentação', y: 500 }, // Como no seu print
];

const colors = ['#6C63FF', '#FF8C00', '#2E8B57', '#DC143C'];

const PieChart = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Svg width={300} height={300}>
        <VictoryPie
          standalone={false}
          data={data}
          colorScale={colors}
          innerRadius={50}
          labelRadius={100}
          labels={({ datum }) => `${((datum.y / 2400) * 100).toFixed(0)}%`}
          style={{
            labels: { fill: 'white', fontSize: 16, fontWeight: 'bold' },
          }}
        />
      </Svg>
    </View>
  );
};

export default PieChart;
