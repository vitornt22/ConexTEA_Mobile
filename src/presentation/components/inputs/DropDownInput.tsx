import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
type DropdownInputProps = {
  placeholder: string;
  label?: string;
  style?: {};
};
export const DropdownInput = ({
  label,
  style,
  placeholder,
}: DropdownInputProps) => {
  const [value, setValue] = useState(null);

  return (
    <View className="my-2" style={{...style}}>
      <Text className="mb-2 text-lg text-primary font-bold">{label}</Text>
      <Dropdown
        dropdownPosition="bottom"
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Pesquisar"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 10,
    borderWidth: 0.5,
    height: 50,
    backgroundColor: 'white',
    padding: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
