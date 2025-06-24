import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

type DropdownInputProps = {
  data: {label: string; value: string}[];
  placeholder: string;
  label?: string;
  value: string | null;
  onChange: (value: string) => void;
  style?: {};
};

export const DropdownInput = ({
  label,
  style,
  placeholder,
  data,
  value, // vem do pai
  onChange, // callback para atualizar valor no pai
}: DropdownInputProps) => {
  return (
    <View className="my-2" style={{...style}}>
      {label && (
        <Text className="mb-2 text-lg text-primary font-bold">{label}</Text>
      )}
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
        value={value} // controlled value vindo do pai
        onChange={(item: any) => {
          onChange(item.value); // chama callback no pai para atualizar valor
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
