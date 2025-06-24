import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {AudioReportButton} from '../../components/ReportAudioButton';
import {RootStackParamList} from '../../navigation/types';
import {theme} from '../../../utils/constants/theme';

type CustomReportScreenRouteProp = RouteProp<
  RootStackParamList,
  'CustomReportScreen'
>;

export function CustomReportScreen() {
  const route = useRoute<CustomReportScreenRouteProp>();
  const {text, reportName} = route.params;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 segundos de loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <AudioReportButton bg={theme.primary} />
      <View className="bg-white elevation-lg p-5 rounded-lg mb-[100]">
        <Text className="text-blueText mb-5 text-2xl font-bold">
          {reportName}
        </Text>
        <Text style={{fontSize: 16, lineHeight: 24}}>{text}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
