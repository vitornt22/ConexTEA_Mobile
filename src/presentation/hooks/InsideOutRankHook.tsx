import {Emotions} from '../../models/EmoctionModel';
import {images} from '../../utils/constants/images';

export function useInsideOutRankHook(item?: Emotions | undefined) {
  const insideOutData = [
    {id: '1', title: 'Alegria', percentual: item?.joy || 0, image: images.joy},
    {
      id: '2',
      title: 'Tristeza',
      percentual: item?.sadness || 0,
      image: images.sadness,
    },
    {
      id: '3',
      title: 'Raiva',
      percentual: item?.anger || 0,
      image: images.anger,
    },
    {
      id: '4',
      title: 'Ansiedade',
      percentual: item?.anxiety || 0,
      image: images.anxiety,
    },
    {
      id: '5',
      title: 'Nojinho',
      percentual: item?.disgust || 0,
      image: images.disgust,
    },
    {
      id: '6',
      title: 'Vergonha',
      percentual: item?.embarrassment || 0,
      image: images.embarrassment,
    },
    {
      id: '7',
      title: 'Tédio',
      percentual: item?.ennui || 0,
      image: images.ennui,
    },
    {id: '8', title: 'Medo', percentual: item?.fear || 0, image: images.fear},
  ];
  const sortedData = insideOutData
    .slice()
    .sort((a, b) => b.percentual - a.percentual);

  return {sortedData};
}
