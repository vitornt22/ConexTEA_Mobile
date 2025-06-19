import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';

type SkillsEvolutionChartProps = {
  chartData: any;
  title: string;
};

export default function SkillsEvolutionChart({
  chartData,
  title,
}: SkillsEvolutionChartProps) {
  return (
    <ScrollView
      className="mt-4 elevation-lg bg-white rounded-lg"
      contentContainerStyle={{padding: 20}}>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
        {title}
      </Text>
      <Text className="text-primary text-xs mb-4 ">
        1-Não demonstrou/ 2-Parcialmente / 3-Demonstrou plenamente
      </Text>

      <LineChart
        data={chartData}
        height={200}
        spacing={30}
        color="#2196F3"
        maxValue={3}
        yAxisLabelTexts={['1', '2', '3']}
        yAxisThickness={1}
        xAxisThickness={1}
        curved
        hideDataPoints={false}
        isAnimated
      />
    </ScrollView>
  );
}
