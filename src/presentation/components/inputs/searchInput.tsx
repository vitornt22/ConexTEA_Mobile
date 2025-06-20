import {TextInput, View} from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../utils/constants/theme';

export type SearchInputProps = {
  mode?: string;
  placeholder: string;
  iconStyle?: string;
  onChangeText?: (text: string) => void;
  value?: string;
};

export function SearchInput({
  mode,
  placeholder,
  iconStyle = 'regular',
  onChangeText,
  value,
}: SearchInputProps) {
  return (
    <View className="px-4 flex-row items-center rounded-lg bg-[#EEEFEF]">
      <Icon name="magnifying-glass" iconStyle="solid" />
      <TextInput
        placeholderTextColor={theme.subtitle}
        inputMode={mode as any}
        placeholder={placeholder}
        style={{
          color: theme.subtitle,
          marginLeft: 10,
          height: 40,
          borderColor: 'black',
          flex: 1,
        }}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
