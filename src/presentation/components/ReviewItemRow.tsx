import {Text, View} from 'react-native';
import {theme} from '../../utils/constants/theme';
import Icon from '@react-native-vector-icons/fontawesome6';

type ReviewItemRowProps = {
  iconName: string;
  title: string;
  text: string;
};
export function ReviewItemRow({iconName, title, text}: ReviewItemRowProps) {
  return (
    <View className="mb-6  flex-row items-center">
      <Icon
        name={iconName as any}
        iconStyle="solid"
        color={theme.primary}
        size={20}
      />
      <View className="ml-7">
        <Text className="text-md text-subtitle">{title}</Text>
        <Text className="text-lg font-bold">{text}</Text>
      </View>
    </View>
  );
}
