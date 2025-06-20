import {TextInput, View} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../utils/constants/theme';

export type ChatInputProps = {
  mode?: string;
  placeholder: string;
  iconStyle?: string;
};

export function ChatInput({
  mode,
  placeholder,
  iconStyle = 'regular',
}: ChatInputProps) {
  return (
    <View className="px-4 rounded-full  flex-row items-center bg-blue bg-[#EEEFEF]    h-[52] ">
      <TextInput
        placeholderTextColor={theme.subtitle}
        inputMode={mode as any}
        placeholder={placeholder}
        style={{
          color: theme.subtitle,
          marginLeft: 10,
          height: 52,
          borderColor: 'black',
        }}></TextInput>
    </View>
  );
}
