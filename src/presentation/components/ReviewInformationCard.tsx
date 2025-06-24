import {View} from 'react-native';
import {ReviewItemRow} from './ReviewItemRow';
import {ReviewItemModel} from '../../models/ReviewItem';
import {formatDate} from '../../utils/helpers/format_date_helper';

type ReviewInformationCardProps = {item: ReviewItemModel};
export function ReviewInformationCard({item}: ReviewInformationCardProps) {
  return (
    <View className="bg-white elevation-lg rounded-lg p-5">
      <ReviewItemRow
        iconName={'user'}
        title={'Aluno'}
        text={item?.studentName}
      />
      <ReviewItemRow
        iconName={'user'}
        title={'Disciplina'}
        text={item?.subjectName}
      />
      <ReviewItemRow
        iconName={'calendar-days'}
        title={'Data'}
        text={formatDate(item?.date)}
      />
    </View>
  );
}
