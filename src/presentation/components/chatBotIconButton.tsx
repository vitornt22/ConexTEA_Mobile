import {View} from 'react-native';
import {images} from '../../utils/constants/images';
import {ImageIcon} from './ImageIcon';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../navigation/types';
import {theme} from '../../utils/constants/theme';

export function ChatBotIconButton() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="mr-7">
      <ImageIcon
        color={theme.blueText}
        image={images.suport}
        onPress={() => navigation.navigate('chatbot')}
      />
    </View>
  );
}
