import React from 'react';
import {View, Text} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

const activitiesTypesData = [
  {value: 90, label: 'Linguagem', frontColor: '#4CAF50'},
  {value: 70, label: 'Cognitivo', frontColor: '#2196F3'},
  {value: 85, label: 'Motricidade', frontColor: '#FF9800'},
  {value: 60, label: 'Sensorial', frontColor: '#9C27B0'},
  {value: 75, label: 'Autonomia', frontColor: '#FFC107'},
  {value: 65, label: 'Material', frontColor: '#00BCD4'},
  {value: 80, label: 'Participação', frontColor: '#F44336'},
];

export default function ChartWithAxisLabels() {
  return (
    <View className="p-5 bg-white rounded-lg elevation-lg">
      {/* Título eixo Y */}
      <Text
        style={{
          position: 'absolute',
          top: 100,
          left: 0,
          transform: [{rotate: '-90deg'}],
          width: 150,
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#333',
        }}>
        Nível de Participação (%)
      </Text>

      {/* Gráfico e legenda juntos */}
      <View style={{marginLeft: 50}}>
        <BarChart
          data={activitiesTypesData}
          barWidth={28}
          spacing={20}
          hideYAxisText={false}
          yAxisThickness={1}
          xAxisThickness={1}
          maxValue={100}
          showGradient
        />

        {/* Legenda eixo X */}
        <Text
          style={{
            textAlign: 'center',
            marginTop: 20,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Tipo de Atividade
        </Text>
      </View>
    </View>
  );
}
