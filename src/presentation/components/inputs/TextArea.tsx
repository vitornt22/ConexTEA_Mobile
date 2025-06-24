import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {theme} from '../../../utils/constants/theme';

type TextAreaProps = {
  placeholder: string;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};

export function TextArea({
  placeholder,
  label,
  value,
  onChangeText,
}: TextAreaProps) {
  return (
    <View>
      <Text className="mb-2 text-primary text-lg font-bold">{label}</Text>
      <TextInput
        style={{color: theme.primary}}
        className="border-2 border-gray-300 rounded-lg p-3 text-blueText h-32 text-base"
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
