import {Text, TouchableOpacity, View} from 'react-native';

export type DefaultButtonProps = {
  color: string;
  placeholder: string;
  height?: number;
  style?: {};
  buttonFunction: () => void;
  icon?: React.ReactNode;
};
export function DefaultButton({
  color,
  icon,
  height = 40,
  placeholder,
  style,
  buttonFunction,
}: DefaultButtonProps) {
  return (
    <TouchableOpacity
      onPress={buttonFunction}
      style={{backgroundColor: color, height: height, ...style}}
      className="mt-5 rounded-lg w-[100%]   items-center justify-center">
      <View className="flex-row justify-between  items-center">
        <Text className="mr-3 text-white font-bold">{placeholder}</Text>
        {icon}
      </View>
    </TouchableOpacity>
  );
}
