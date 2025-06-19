import React from 'react';
import { View, Text } from 'react-native';

interface RatingIndicatorProps {
  rating: number;
  maxRating: number;
}

export function RatingIndicator({ rating, maxRating }: RatingIndicatorProps) {
  const getRatingColor = (value: number) => {
    if (value <= 1) return '#EF4444'; // Red
    if (value <= 2) return '#F59E0B'; // Orange
    return '#10B981'; // Green
  };

  const getRatingText = (value: number) => {
    if (value <= 1) return 'Necessita Apoio';
    if (value <= 2) return 'Em Desenvolvimento';
    return 'Desenvolvido';
  };

  const getProgressWidth = () => {
    return (rating / maxRating) * 100;
  };

  const ratingColor = getRatingColor(rating);

  return (
    <View className="space-y-1">
      <View className="flex-row items-center space-x-3">
        <View className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
          <View 
            className="h-full rounded-full"
            style={{ 
              width: `${getProgressWidth()}%`,
              backgroundColor: ratingColor
            }} 
          />
        </View>
        <Text 
          className="text-sm font-bold min-w-[30px] text-right"
          style={{ color: ratingColor }}
        >
          {rating}/{maxRating}
        </Text>
      </View>
      <Text 
        className="text-xs font-semibold text-right"
        style={{ color: ratingColor }}
      >
        {getRatingText(rating)}
      </Text>
    </View>
  );
}