import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {getReviewIcon} from '../../../utils/constants/reviewIcons';
import {ReviewItemModel} from '../../../domain/models/ReviewItem';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../utils/constants/theme';
import {formatDate} from '../../../utils/helpers/format_date_helper';

type ReviewListTileProps = {
  item: ReviewItemModel;
  navigation: any;
  onPress: () => void;
};

export function ReviewListTile({
  item,
  navigation,
  onPress,
}: ReviewListTileProps) {
  const colors = {
    Review: '#FFF291',
    CheckIn: '#E5ADAD',
    Action: '#A6B1F6',
    Activitie: '#E7FDE4',
  };

  const getReviewName = () => {
    switch (item.Type) {
      case 'Review':
        return 'Avaliação';
      case 'Action':
        return 'Ação ou Pedido';
      case 'Activitie':
        return 'Registro de Atividade';
      case 'CheckIn':
        return 'Check-In Emocional';
      default:
        break;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      className="py-1 flex-row items-center justify-between">
      <View className="flex-row items-center border-b py-2 border-b-gray-200 ">
        <View
          className=" w-14 h-14 items-center justify-center  p-4 rounded-[500] mr-2"
          style={{backgroundColor: colors[item.Type] || 'white'}}>
          <Image className="w-7 h-7" source={getReviewIcon(item.Type)} />
        </View>
        <View>
          <Text className="text-md font-semibold">{getReviewName()}</Text>
          <View className="flex-row justify-between">
            <Text className="mt-1 text-xs text-subtitle mr-3">
              {formatDate(item.date)}
            </Text>
            <Text className="mt-1 text-xs text-subtitle">
              {item.TeacherName}
            </Text>
          </View>
        </View>
      </View>
      <Pressable className="mr-3">
        <Icon
          name="chevron-right"
          size={25}
          color={theme.primary}
          iconStyle="solid" // <- adicione essa linha
        />
      </Pressable>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#1E1E1E',
  },
  subtitle: {
    fontWeight: '400',
    color: '#1E1E1E',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});
