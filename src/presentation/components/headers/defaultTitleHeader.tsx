import Icon from '@react-native-vector-icons/fontawesome6';
import {Text, View} from 'react-native';

type DefaultTitleHeaderProps = {
  title: string;
  iconFunction?: () => void;
  icon?: boolean;
};
export function DefaultTitleHeader({
  title,
  icon = true,
  iconFunction,
}: DefaultTitleHeaderProps) {
  const iconComponent = (
    <Icon
      onPress={iconFunction}
      style={{marginRight: 10}}
      size={25}
      color={'white'}
      name="circle-info"
      iconStyle="solid"
    />
  );
  return (
    <View className="flex-row justify-between bg-primary h-16  elevation-lg  items-center mt-5 rounded-lg px-3 py-2 ">
      <Text className="text-2xl text-white font-semibold">{title}</Text>
      {icon == true ? iconComponent : null}
    </View>
  );
}
