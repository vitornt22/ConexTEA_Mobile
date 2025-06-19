import {ScrollView, View} from 'react-native';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import {habilitieRank} from '../../../../data/mockups/rankData';
import {InsideOutListTile} from '../../../components/listTiles/insideOutListTile';

export function HabilitiesRank() {
  return (
    <View className="flex-1  bg-white">
      <DefaultTitleHeader icon={false} title="Habilidades" />
      <ScrollView className="mt-4 px-3">
        {habilitieRank.map((item: {id: any}) => (
          <InsideOutListTile key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}
