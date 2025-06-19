import {Text} from 'react-native';

type GenerateReportButtonProps = {
  navigation: any;
  text: string;
  title: string;
  reportName: string;
  style?: {};
};

export function GenerateReportButton({
  navigation,
  text,
  title,
  style,
  reportName,
}: GenerateReportButtonProps) {
  return (
    <Text
      onPress={() => {
        navigation.navigate('customReport', {
          text: text,
          reportName: reportName,
        });
      }}
      style={{...style}}
      className="my-4 underline text-lg text-primary">
      {title}
    </Text>
  );
}
