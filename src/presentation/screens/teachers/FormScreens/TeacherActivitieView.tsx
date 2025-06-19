import {Text, TextInput, View} from 'react-native';
import {CommonFormScreen} from './CommonScreen';
import {useState} from 'react';
import {DropdownInput} from '../../../components/inputs/DropDownInput';
import {TextArea} from '../../../components/inputs/TextArea';
import {DefaultButton} from '../../../components/buttons/defaultButton';
import {theme} from '../../../../utils/constants/theme';
import Icon from '@react-native-vector-icons/fontawesome6';
import {ConfirmationDialog} from '../../../components/modals/ConfirmationDialog';

export function TeacherActivitieView() {
  const [value, onChangeText] = useState('Useless Multiline Placeholder');
  const [visible, setVisible] = useState(false);

  const buttons = (
    <DefaultButton
      icon={<Icon name="floppy-disk" size={15} color={'white'} />}
      color={theme.primary}
      placeholder={'Salvar'}
      buttonFunction={() => setVisible(true)}
    />
  );

  return (
    <CommonFormScreen title={'Registrar Atividades'} button={buttons}>
      <View>
        <DropdownInput placeholder={'Selecione o aluno'} label="Aluno" />
        <DropdownInput
          placeholder={'Tipo de Atividade'}
          label="Tipo de Atividade"
        />
        <TextArea
          placeholder={'Digite '}
          label={'Descriçao de Atividade'}></TextArea>
        <TextArea
          placeholder={'Descreva o desempenho do aluno '}
          label={'Desempenho do Aluno'}></TextArea>
        <ConfirmationDialog
          onPressCancel={() => {}}
          onPress={() => {}}
          dialogState={{
            state: visible,
            setState: setVisible,
          }}
          title={'Deseja Registrar essa atividade?'}
          subtitle={'A atividade Registrada '}
        />
      </View>
    </CommonFormScreen>
  );
}
