import {StudentHeaderInformations} from '../../../models/Graphs';
import {images} from '../../../utils/constants/images';
import {Image, Text, View} from 'react-native';

type StudentHeaderProps = {
  student: StudentHeaderInformations;
};
export function StudentHeader({student}: StudentHeaderProps) {
  return (
    <View className="bg-white elevation-lg px-5 py-2  rounded-lg flex-row justify-between items-center">
      <View className="flex-row items-center">
        <Image className="w-16 h-16" source={images.avatar1} />
        <View>
          <Text className="text-3xl font-bold ml-3">{student.name}</Text>
          <Text className="text-sm  ml-3">
            {student.class} | {student.currentYear}
          </Text>
        </View>
      </View>
    </View>
  );
}
