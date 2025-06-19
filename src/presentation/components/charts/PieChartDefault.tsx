import React from 'react';
import {View, Text} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';

export default function ParticipationPieChart({data}: any) {
  return (
    <View className="items-center p-5 ">
      <Text className="text-lg font-bold mb-5">
        Participação nas Atividades
      </Text>

      <PieChart
        data={data}
        donut
        showText
        textColor="white"
        textSize={10}
        innerRadius={45}
        radius={90}
        centerLabelComponent={() => (
          <Text className="text-base font-semibold text-gray-800">Total</Text>
        )}
      />

      <View className="mt-6 space-y-2">
        {data.map((item: any, index: number) => (
          <View key={index} className="flex-row items-center ">
            <View
              className="w-4 h-4 rounded"
              style={{backgroundColor: item.color}}
            />
            <Text className="text-sm ml-3 text-gray-700">{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
