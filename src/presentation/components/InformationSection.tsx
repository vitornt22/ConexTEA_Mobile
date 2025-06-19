import {Text, View} from 'react-native';

type InformationSectionProps = {text: string; title: string};
export function InformationSection({title, text}: InformationSectionProps) {
  return (
    <View className="mt-2 mb-2 bg-white rounded-lg self-center w-[90%] p-5 elevation-lg">
      <Text className="text-primary font-bold text-lg">{title}</Text>
      <Text className="text-base text-subtitle">{text}</Text>
    </View>
  );
}
