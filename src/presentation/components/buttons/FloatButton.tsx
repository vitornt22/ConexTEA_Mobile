import Icon from '@react-native-vector-icons/fontawesome6';
import {Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../../utils/constants/theme';

type FloatButtonProps = {
  title: string;
  buttonColor: string;
  textColor: string;
  iconName: string;
  onPress?: () => void;
  style?: {};
};
export function FloatButton({
  title,
  buttonColor,
  textColor = theme.primary,
  iconName,
  style,
  onPress,
}: FloatButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="justify-center mb-4  rounded-md elevation-lg px-5 w-[100] h-[32]"
      style={{backgroundColor: buttonColor, ...style}}>
      <View className="flex-row justify-between items-center ">
        <Text
          style={{color: textColor}}
          className="text-center text-sm font-bold">
          {title}
        </Text>
        <Icon
          name={iconName as any}
          color={textColor}
          iconStyle="solid"
          size={10}
        />
      </View>
    </TouchableOpacity>
  );
}
