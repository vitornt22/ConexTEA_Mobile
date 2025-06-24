import {Image, Pressable, Text, View} from 'react-native';
import {images} from '../../../utils/constants/images';
import Icon from '@react-native-vector-icons/fontawesome6';
import {theme} from '../../../utils/constants/theme';
import {NavigationProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {Student} from '../../../models/ParentModel';
type StudentsListTileProps = {
  student: Student;
};

export function StudentsListTile({student}: StudentsListTileProps) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Pressable
      onPress={() => navigation.navigate('studentProfile', {student: student})}
      className="py-1 flex-row items-center justify-between">
      <View className="flex-row items-center border-b py-2 border-b-gray-200 ">
        <View className=" w-14 h-14 items-center justify-center  p-4 rounded-[500] mr-2">
          <Image className="w-12 h-12" source={images.avatar1} />
        </View>
        <View>
          <Text className="text-md font-semibold">{student.name}</Text>
          <View className="flex-row ">
            <Text className="mt-1 text-xs text-subtitle mr-3">
              {student.school_class}
            </Text>
            <Text className="mt-1 text-xs text-subtitle">
              Nivel: {student.autism_level}
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
