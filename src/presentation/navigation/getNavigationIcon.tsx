import Icon from '@react-native-vector-icons/fontawesome6';
import {Text, View} from 'react-native';

export const getNavigationIcon = (
  focused: any,
  color: string,
  name: string,
) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Icon name={name as any} size={24} color={color} iconStyle="solid" />
      {focused && (
        <Text style={{fontSize: 10, color, marginTop: 4}}>Início</Text>
      )}
    </View>
  );
};
