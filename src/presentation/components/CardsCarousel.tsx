import {View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {useState} from 'react';
import {parentsHomeCards} from '../../utils/constants/parents_home_cards';
import {width} from '../../utils/constants/screenSize';
import {DefaultCard} from './DefaultCard';
import {teacherHomeCards} from '../../utils/constants/teacher_home_cards';

type CardsCarouselProps = {
  type: 'teacher' | 'parents';
  navigation: any;
};

export function CardsCarousel({type, navigation}: CardsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ITEM_WIDTH = width * 0.9;
  const SIDE_MARGIN = (width - ITEM_WIDTH) / 2;
  const data = type == 'teacher' ? teacherHomeCards : parentsHomeCards;

  return (
    <View>
      <Carousel
        // faz o carrossel ocupar 100% da largura, mas cada item terá ITEM_WIDTH
        width={width}
        height={200}
        data={data}
        autoPlay={false}
        scrollAnimationDuration={200}
        onConfigurePanGesture={
          gesture =>
            gesture
              .activeOffsetX([-10, 10]) // ativa quando mover mais de 10px para os lados
              .failOffsetY([-5, 5]) // evita ativar se o usuário estiver rolando para cima/baixo
        }
        onSnapToItem={index => setActiveIndex(index)}
        style={{flexGrow: 0, marginTop: -5}}
        pagingEnabled
        renderItem={({item}) => (
          <View style={{width: ITEM_WIDTH}}>
            <DefaultCard
              image={item.image as any}
              title={item.title}
              subtitle={item.subtitle}
              buttonPlaceholder={item.buttonLabel}
              primaryColor={item.primaryColor}
              secondaryColor={item.secondaryColor}
              thirdColor={item.thirdColor}
              buttonFunction={() => navigation.navigate(item.routeName)}
            />
          </View>
        )}
      />

      {/* PAGINAÇÃO */}
      <View className="flex-row justify-center ">
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 4,
              backgroundColor: i === activeIndex ? '#2E8FE6' : '#D1D5DB',
            }}
          />
        ))}
      </View>
    </View>
  );
}
