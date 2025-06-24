import {ScrollView, View} from 'react-native';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';
import {habilitieRank} from '../../../../data/mockups/rankData';
import {InsideOutListTile} from '../../../components/listTiles/insideOutListTile';
import {SkillReport} from '../../../../models/Graphs';

type HabilitiesRankProps = {
  skillReport: SkillReport[] | [];
};

export function HabilitiesRank({skillReport}: HabilitiesRankProps) {
  return (
    <View className="flex-1  bg-white">
      <DefaultTitleHeader icon={false} title="Habilidades" />
      <ScrollView className="mt-4 px-3">
        {skillReport.map((item: any) => (
          <InsideOutListTile key={item.id} item={item} typeTile="review" />
        ))}
      </ScrollView>
    </View>
  );
}
