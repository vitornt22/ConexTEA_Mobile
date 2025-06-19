import {Text, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Icon from '@react-native-vector-icons/fontawesome6';
import {StudentHeader} from '../../components/headers/StudentHeader';
import {theme} from '../../../utils/constants/theme';

export function PeriodicReportsScreen() {
  return (
    <View className="flex-1 bg-white p-5">
      <StudentHeader />
      <View className="h-[300]">
        <ScrollView className=" bg-white rounded-lg elevation-lg mt-5 p-5">
          <Text className="text-lg font-semibold">1º Semestre</Text>
          <Text className="text-sm">
            João Pedro apresentou avanços significativos na interação com
            colegas ao longo deste semestre. No início, demonstrava preferência
            por brincar sozinho e evitava o contato visual. Com o apoio da
            equipe pedagógica e estratégias de mediação, passou a participar de
            atividades em grupo, ainda que com certa timidez. Já é possível
            observar momentos em que ele inicia pequenas interações verbais e
            responde a perguntas simples. Aceita melhor a presença dos colegas
            ao seu redor e começa a entender regras de convivência, como esperar
            a vez e compartilhar materiais. Seguiremos incentivando essas
            interações e ampliando seu repertório social no próximo semestre.
          </Text>
        </ScrollView>
      </View>
      <View className="h-[300]">
        <ScrollView className=" bg-white rounded-lg elevation-lg mt-5 p-5">
          <Text className="text-lg font-semibold">2º Semestre</Text>
          <Text className="text-sm">
            João Pedro apresentou avanços significativos na interação com
            colegas ao longo deste semestre. No início, demonstrava preferência
            por brincar sozinho e evitava o contato visual. Com o apoio da
            equipe pedagógica e estratégias de mediação, passou a participar de
            atividades em grupo, ainda que com certa timidez. Já é possível
            observar momentos em que ele inicia pequenas interações verbais e
            responde a perguntas simples. Aceita melhor a presença dos colegas
            ao seu redor e começa a entender regras de convivência, como esperar
            a vez e compartilhar materiais. Seguiremos incentivando essas
            interações e ampliando seu repertório social no próximo semestre.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
