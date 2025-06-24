import {FlatList, View} from 'react-native';
import {ReviewListTile} from '../../components/listTiles/ReviewListTile';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/types';
import {ReviewItemModel} from '../../../models/ReviewItem';

type AllReviewsProps = {
  type: string;
  reviewItems: ReviewItemModel[];
};
type AllReviewsScreenNavigationProp = StackNavigationProp<RootStackParamList>;
const navigation = useNavigation<AllReviewsScreenNavigationProp>();

export function AllReviews({type, reviewItems}: AllReviewsProps) {
  var items;

  if (type == 'all') {
    items = reviewItems;
  } else {
    items = reviewItems.filter(item => item.Type === type);
  }

  const [itemState, setItemState] = useState<ReviewItemModel>(items[0]);

  return (
    <View>
      <FlatList
        className="p-3 px-5"
        data={items}
        keyExtractor={(item, index) =>
          item.othersInformations.id.toString() + item.Type
        }
        renderItem={({item}) => {
          return (
            <ReviewListTile
              item={item}
              navigation={navigation}
              onPress={() => {
                switch (item.Type) {
                  case 'Review':
                    navigation.navigate('assessmentView', {item: item});
                    break;
                  case 'Activitie':
                    navigation.navigate('activityView', {item: item});
                    break;
                  case 'CheckIn':
                    navigation.navigate('checkInView', {item: item});
                    break;
                  case 'Action':
                    navigation.navigate('actionView', {item: item});
                    break;
                  default:
                    break;
                }
              }}
            />
          );
        }}
      />
    </View>
  );
}
