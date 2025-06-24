import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {theme} from '../../utils/constants/theme';

export default function LoadingScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator color={theme.primary} size={60} />
    </View>
  );
}
