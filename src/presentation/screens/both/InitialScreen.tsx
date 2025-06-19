import {Image, Text, View} from 'react-native';
import {DefaultCard} from '../../components/DefaultCard';
import {images} from '../../../utils/constants/images';
import {theme} from '../../../utils/constants/theme';

export function InitialScreen({navigation}: any) {
  return (
    <View className="flex-1 bg-white p-5">
      <View className="flex-col pt-16">
        <View className="flex-row items-center justify-between">
          <View className="w-[60%]">
            <Text className="text-primary text-2xl font-bold">
              Seja Bem Vindo(a)
            </Text>
            <Text className="text-subtitle text-md">
              Escolha uma das opções abaixo para avançar na nossa aplicação
            </Text>
          </View>

          <Image className="h-48 w-40" source={images.lumi} />
        </View>

        <DefaultCard
          image="book"
          title={'Professor'}
          subtitle={'Entrar como'}
          buttonPlaceholder="Entrar"
          primaryColor={theme.primary}
          secondaryColor={theme.secondary}
          thirdColor={theme.thirdBlue}
          buttonFunction={() =>
            navigation.navigate('Login', {screenRoute: 'teacher'})
          }
        />
        <DefaultCard
          image="parents"
          title={'Responsável'}
          subtitle={'Entrar como'}
          buttonPlaceholder="Entrar"
          primaryColor={theme.primaryRed}
          secondaryColor={theme.secondaryRed}
          thirdColor={theme.thirdRed}
          buttonFunction={() =>
            navigation.navigate('Login', {screenRoute: 'parents'})
          }
        />
      </View>
    </View>
  );
}
