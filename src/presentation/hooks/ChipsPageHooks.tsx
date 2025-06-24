import {useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';

export function ChipsPageHook() {
  const pagerRef = useRef<PagerView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onChipPress = (index: number) => {
    setActiveIndex(index);
    pagerRef.current?.setPage(index);
  };

  const onPageChange = (e: any) => {
    setActiveIndex(e.nativeEvent.position);
  };

  return {pagerRef, onChipPress, onPageChange, activeIndex};
}
