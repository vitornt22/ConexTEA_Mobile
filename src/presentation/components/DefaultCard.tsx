import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DefaultButton} from './buttons/defaultButton';
import {ImageCircle} from './ImageCircle';
import {ImageKey} from '../../utils/constants/images';

const images = {};

export type InitialCardProps = {
  title: string;
  subtitle: string;
  buttonPlaceholder: string;
  primaryColor?: string;
  secondaryColor?: string;
  thirdColor?: string;
  buttonFunction: () => void;
  image: ImageKey;
};

export function DefaultCard({
  title,
  image,
  subtitle,
  buttonPlaceholder,
  primaryColor = 'blue',
  secondaryColor = 'green',
  thirdColor = 'yellow',
  buttonFunction,
}: InitialCardProps) {
  const subtitleComponent = (
    <Text style={{fontSize: 12}} className="text-md w-[110%] mb-1 text-white ">
      {subtitle}
    </Text>
  );

  return (
    <View
      style={{backgroundColor: primaryColor}}
      className="flex-row mt-5  p-3  items-center justify-between  w-[100%] h-[170] rounded-2xl">
      <View className="flex-1 flex-col items-start m-2">
        <Text className="text-3xl w-[110%] font-bold text-white">{title}</Text>
        {subtitleComponent}
        <DefaultButton
          color={secondaryColor}
          placeholder={buttonPlaceholder}
          buttonFunction={buttonFunction}
        />
      </View>

      <View className="w-5"></View>
      <ImageCircle
        image={image}
        circleColor={thirdColor ? thirdColor : secondaryColor}
      />
    </View>
  );
}
