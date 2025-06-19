import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const segments = [
  {limit: 20, color: '#3498db'}, // Azul
  {limit: 40, color: '#FF7F50'}, // Laranja/Vermelho
  {limit: 55, color: '#00FF87'}, // Verde
  {limit: 70, color: '#FECD28'}, // Amarelo
  {limit: 85, color: '#EB80DA'}, // Rosa
  {limit: 100, color: '#8e44ad'}, // Roxo
];

export function CircularProgressMultiColor({
  size = 50,
  strokeWidth = 8,
  percentage = 75,
}) {
  const clampedPercentage = Math.max(0, Math.min(100, percentage));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let startAngle = 0;

  const renderSegments = () => {
    return segments.map((segment, index) => {
      const fromPercent = startAngle;
      const toPercent = Math.min(segment.limit, clampedPercentage);
      const segmentPercentage = toPercent - fromPercent;

      if (segmentPercentage <= 0) return null;

      const strokeLength = (segmentPercentage / 100) * circumference;
      const dashArray = `${strokeLength}, ${circumference}`;
      const dashOffset = circumference * (1 - fromPercent / 100);

      startAngle = segment.limit;

      return (
        <Circle
          key={index}
          stroke={segment.color}
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round" // 🔥 ESSENCIAL PARA BORDA ARREDONDADA
          transform={`rotate(-90 ${center} ${center})`}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          stroke="#f2f2f2"
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {renderSegments()}
      </Svg>
      <View style={[StyleSheet.absoluteFill, styles.textContainer]}>
        <Text style={[styles.text, {fontSize: size / 4}]}>{`${Math.round(
          clampedPercentage,
        )}%`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#333',
  },
});
