import {Image, SafeAreaView} from 'react-native';
import {images} from '../../../utils/constants/images';

export function InitialScreenHeader() {
  return (
    <SafeAreaView className="  h-[60] bg-white flex-row items-center p-4  ">
      <Image source={images.logo} className=" top-5 w-32 h-24 resize-contain" />
    </SafeAreaView>
  );
}
