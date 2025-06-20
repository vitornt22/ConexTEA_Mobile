import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {theme} from '../../../utils/constants/theme';

type TextAreaProps = {placeholder: string; label: string};
export function TextArea({placeholder, label}: TextAreaProps) {
  const [text, setText] = useState('');

  return (
    <View className="">
      <Text className="mb-2 text-primary text-lg font-bold">{label}</Text>
      <TextInput
        style={{color: theme.primary}}
        className="border-2 border-gray-300 rounded-lg p-3 text-blueText h-32 text-base"
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        value={text}
        onChangeText={setText}
      />
    </View>
  );
}
