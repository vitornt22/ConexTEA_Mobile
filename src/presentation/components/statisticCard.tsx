import {Text, View} from 'react-native';
import {width} from '../../utils/constants/screenSize';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../utils/constants/theme';

type StatisticCardProps = {
  count: number;
  bg?: string;
  title: string;
  iconName: string;
  iconType?: 'regular' | 'solid' | 'brand';
};

export function StatisticCard({
  count,
  title,
  bg = theme.primary,
  iconName,
  iconType = 'regular',
}: StatisticCardProps) {
  return (
    <View
      style={{backgroundColor: bg}}
      className="flex-col  justify-between  my-3 w-[100] h-[100] items-center py-5 rounded-lg elevation-lg">
      <Icon
        name={iconName as any}
        color={'white'}
        size={20}
        iconStyle={iconType}
      />
      <Text className="my-1 text-white text-xl font-semibold">{count}</Text>
      <Text className="text-white text-sm">{title}</Text>
    </View>
  );
}
