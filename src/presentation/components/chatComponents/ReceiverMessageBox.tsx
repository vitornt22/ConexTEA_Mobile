import {View, Text} from 'react-native';

export function ReceiverMessageBox() {
  return (
    <View className="items-start  elevation-lg">
      <View className="px-3 justify-center h-10 w-[80%] bg-[#1E79CA] rounded-t-lg">
        <Text className="text-white">LUMI</Text>
      </View>
      <View className="bg-[#DEEFFF] w-[80%] rounded-bl-lg min-h-24 p-3 ">
        <Text className="text-black">
          Olá, eu sou o Lumi ! No que eu posso te ajudar?
        </Text>
        <Text className="text-xs absolute bottom-4 right-4">01:14pm</Text>
      </View>
    </View>
  );
}
