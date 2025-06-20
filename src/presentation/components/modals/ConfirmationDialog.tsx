import {View} from 'react-native';
import Dialog from 'react-native-dialog';
import {theme} from '../../../utils/constants/theme';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';

type ConfirmationDialogProps = {
  onPressCancel: () => void;
  title: string;
  subtitle: string;
  onPress: () => void;
  dialogState: {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
export function ConfirmationDialog({
  onPress,
  title,
  subtitle,
  onPressCancel,
  dialogState,
}: ConfirmationDialogProps) {
  const navigation = useNavigation<NavigationProp>();

  const save = () => {
    dialogState.setState(false);
    navigation.goBack();
  };
  const hideDialog = () => {
    dialogState.setState(false);
  };
  return (
    <View>
      <Dialog.Container
        visible={dialogState.state}
        contentStyle={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 20,
        }}>
        <Dialog.Title style={{color: theme.primary}}>{title}</Dialog.Title>
        <Dialog.Description>{subtitle}</Dialog.Description>
        <Dialog.Button label="Cancelar" onPress={hideDialog} />
        <Dialog.Button label="Salvar" onPress={save} />
      </Dialog.Container>
    </View>
  );
}
