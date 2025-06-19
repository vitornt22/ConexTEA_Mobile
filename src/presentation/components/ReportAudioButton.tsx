import {TouchableOpacity, Text} from 'react-native';
import {theme} from '../../utils/constants/theme';
import Icon from '@react-native-vector-icons/fontawesome6';

type AudioReportButtonProps = {
  bg?: string;
  style?: {};
};

export function AudioReportButton({
  bg = 'white',
  style,
}: AudioReportButtonProps) {
  return (
    <TouchableOpacity
      style={{backgroundColor: bg, ...style}}
      className="flex-row  px-4  justify-between elevation-lg items-center  rounded-lg  my-4 h-16 ">
      <Text
        style={{color: bg === 'white' ? theme.blueText : 'white'}}
        className="text-2xl font-bold ">
        Relatório por Audio
      </Text>

      <Icon
        style={{marginRight: 10}}
        size={20}
        color={bg == 'white' ? theme.blueText : 'white'}
        name="play"
        iconStyle="solid"
      />
    </TouchableOpacity>
  );
}
