import {Image, SafeAreaView, Text, View} from 'react-native';
import {ImageIcon} from '../ImageIcon';
import {images} from '../../../utils/constants/images';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

type HomeParentsHeaderProps = {
  name: string | undefined;
  year: number | undefined;
  schoolClass: string | undefined;
};

export function HomeParentsHeader({
  name,
  year,
  schoolClass,
}: HomeParentsHeaderProps) {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View className="h-28 elevation-lg border-b border-b-gray-200 bg-white justify-center px-6">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Image className="w-16 h-16" source={images.avatar1} />
          <View>
            <Text className="text-3xl font-bold ml-3">{name}</Text>
            <Text className="text-sm  ml-3">
              {schoolClass} | {year}
            </Text>
          </View>
        </View>
        <View className="flex-row justify-between  ">
          <ImageIcon
            image={images.suport}
            onPress={() => navigation.navigate('chatbot')}
          />
          <View className="w-3"></View>
          <ImageIcon
            image={images.chat}
            onPress={() => navigation.navigate('chatParent')}
          />
        </View>
      </View>
    </View>
  );
}
