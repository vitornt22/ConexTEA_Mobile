import {View, Text} from 'react-native';

export function SenderMessageBox() {
  return (
    <View className="items-end mt-3 justify-center p-2 elevation-lg">
      <View className="bg-[#DEEFFF] w-[80%] rounded-bl-lg min-h-32 p-3 ">
        <Text className="text-right text-black">
          Olá, eu sou o Lumi ! No que eu posso te ajudar?
        </Text>
        <Text className="text-xs absolute bottom-4 right-4">01:14pm</Text>
      </View>
    </View>
  );
}
