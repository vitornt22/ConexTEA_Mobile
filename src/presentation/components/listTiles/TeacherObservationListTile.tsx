import {Text, View} from 'react-native';

export function TeacherObservationListTile() {
  return (
    <View className="mb-3 ">
      <View className="flex-row">
        <Text className="mr-2 text-sm font-semibold ">10/04/2025</Text>
        <Text className="mr-2 text-sm font-semibold">Prof. Vitor Neto</Text>
      </View>
      <Text className="text-xs">
        Valentina está começando a participar das atividade em grupo.
      </Text>
    </View>
  );
}
