import {Image, SafeAreaView, View} from 'react-native';
import {images} from '../../../utils/constants/images';
import {ImageIcon} from '../ImageIcon';
import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';

export function BottomBarDefaultHeader() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="h-28 elevation-lg border-b border-b-gray-200 bg-white justify-center">
      <View className="flex-row justify-between items-center">
        <Image className="w-40 h-32" source={images.logo} />
        <View className="flex-row justify-between  mr-5">
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
    </SafeAreaView>
  );
}
