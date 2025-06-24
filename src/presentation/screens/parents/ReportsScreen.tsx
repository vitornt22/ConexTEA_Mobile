import {DefaultCard} from '../../components/DefaultCard';
import {theme} from '../../../utils/constants/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

export function ReportsScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView className="px-5 bg-white">
      <DefaultCard
        image="graphs"
        title={'Evolução'}
        subtitle={
          'Confira os gráficos de evolução emocional e comportamental de ValentinA'
        }
        buttonPlaceholder="Acessar"
        primaryColor={theme.primary}
        secondaryColor={theme.secondary}
        thirdColor={theme.thirdBlue}
        buttonFunction={() => navigation.navigate('evolution')}
      />
      <DefaultCard
        image="rank"
        title={'Avaliações'}
        subtitle={
          'Confira os Rankings avaliativos no contexto emocional e comportamental de Valentina.'
        }
        buttonPlaceholder="Acessar"
        primaryColor={theme.primaryRed}
        secondaryColor={theme.secondaryRed}
        thirdColor={theme.thirdRed}
        buttonFunction={() => navigation.navigate('assessments')}
      />
      <DefaultCard
        image="report"
        title={'PEI'}
        subtitle={
          'Confira os detalhes do Plano Educacional Individualizado (PEI) do seu filho.'
        }
        buttonPlaceholder="Acessar"
        primaryColor={theme.primaryGreen}
        secondaryColor={theme.secondaryGreen}
        thirdColor={'black'}
        buttonFunction={() => navigation.navigate('PEI', {studentId: 1})}
      />
      <DefaultCard
        image="tasks"
        title={'Atividades'}
        subtitle={
          'Confira as atividades realizadas no ambiente escolar pelo o seu   filho'
        }
        buttonPlaceholder="Acessar"
        primaryColor={theme.primaryPurple}
        secondaryColor={theme.secondaryPurple}
        thirdColor={'black'}
        buttonFunction={() => navigation.navigate('activities')}
      />
    </ScrollView>
  );
}
