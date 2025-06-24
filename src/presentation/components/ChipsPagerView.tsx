import {useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {ChipsPageHook} from '../hooks/ChipsPageHooks';

type ChipsPagerViewProps = {
  chips: any;
  style?: {};
};
export function ChipsPagerView({chips, style}: ChipsPagerViewProps) {
  const {pagerRef, onChipPress, onPageChange, activeIndex} = ChipsPageHook();

  return (
    <View className="flex-1 bg-white">
      {/* CHIPS */}
      <View style={{height: 70, ...style}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-5 py-5">
          {chips.map((item: any, i: number) => (
            <TouchableOpacity
              key={i}
              className="rounded-full justify-center bg-[#E0F0FF] px-4 py-1 mr-4 h-[35]"
              style={[activeIndex === i ? styles.activeChip : {}]}
              onPress={() => onChipPress(i)}>
              <Text style={[activeIndex === i ? styles.activeChipText : {}]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* PAGER VIEW */}
      <PagerView
        ref={pagerRef}
        style={{flex: 1}}
        initialPage={0}
        onPageSelected={onPageChange}>
        {chips.map((label: any, i: number) => label.component)}
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  activeChip: {
    backgroundColor: '#3478F6',
  },
  activeChipText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
