import {TextInput, View} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../utils/constants/theme';

export type LoginTextInputProps = {
  mode?: string;
  iconName: string;
  placeholder: string;
  iconStyle?: string;
};

export function LoginTextInput({
  mode,
  placeholder,
  iconName,
  iconStyle = 'regular',
}: LoginTextInputProps) {
  return (
    <View className="px-4  flex-row items-center bg-blue  rounded-3xl border border-gray-200 h-[52] mt-5">
      <Icon
        name={iconName as any}
        size={20}
        color={theme.primary}
        className="bg-white"
        iconStyle={iconStyle as any}
      />
      <TextInput
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
