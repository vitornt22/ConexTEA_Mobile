import {View} from 'react-native';
import {DefaultTitleHeader} from '../../../components/headers/defaultTitleHeader';

type CommonFormScreenProps = {
  title: string;
  children: React.ReactNode;
  button?: React.ReactNode;
  withCard?: boolean;
};
export function CommonFormScreen({
  children,
  title,
  button,
  withCard = true,
}: CommonFormScreenProps) {
  const card = (
    <View className="  my-4 bg-white rounded-lg elevation-lg p-5">
      {children}
    </View>
  );
  return (
    <View className="flex-1 bg-white p-5">
      <DefaultTitleHeader title={title} />
      {withCard === true ? card : children}
      {button}
    </View>
  );
}
