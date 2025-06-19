import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';
import {DefaultCard} from '../../components/DefaultCard';
import {theme} from '../../../utils/constants/theme';
import {ScrollView} from 'react-native-gesture-handler';

export function TeacherReviewScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView className="px-5 bg-white">
      <DefaultCard
        image="insideOut"
        title={'Check-In'}
        subtitle={'Obtenha o as emoções e sentimentos dos seus alunos'}
        buttonPlaceholder="Registrar"
        primaryColor={theme.primary}
        secondaryColor={theme.secondary}
        thirdColor={theme.thirdBlue}
        buttonFunction={() => navigation.navigate('teacherCheckInView')}
      />
      <DefaultCard
        image="rank"
        title={'Avaliações'}
        subtitle={'Registre a avaliação comportamental de habilidades'}
        buttonPlaceholder="Acessar"
        primaryColor={theme.primaryPink}
        secondaryColor={theme.secondaryPink}
        thirdColor={theme.secondaryPink}
        buttonFunction={() => navigation.navigate('teacherAssessment')}
      />
      <DefaultCard
        image="tasks"
        title={'Atividades'}
        primaryColor={theme.primaryGreen}
        secondaryColor={theme.secondaryGreen}
        subtitle={'Registrar Atividades realizada eparticipação do aluno'}
        buttonPlaceholder={'Registrar'}
        buttonFunction={() => navigation.navigate('teacherActivitieView')}
      />
      <View className="w-5"></View>
      <DefaultCard
        image="pictogramas"
        title={'Pictogramas'}
        primaryColor={theme.primaryRed}
        secondaryColor={theme.secondaryRed}
        subtitle={'Use os pictogramas para mapear desejos dos seus alunos '}
        buttonPlaceholder={'Obter'}
        buttonFunction={() => navigation.navigate('teacherActionView')}
      />
    </ScrollView>
  );
}
