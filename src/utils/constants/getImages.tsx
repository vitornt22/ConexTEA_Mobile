import {ImageKey, images} from './images';

export function getReviewImage(name: string) {
  if (images.hasOwnProperty(name)) {
    return images[name as ImageKey];
  } else {
    console.warn(`Imagem não encontrada para o nome: ${name}`);
    return null;
  }
}

export const getImageOficial = (item: any) => {
  switch (item) {
    case 1:
      return images.joy;
    case 2:
      return images.anger;
    case 3:
      return images.ennui;
    case 4:
      return images.embarrassment;
    case 5:
      return images.disgust;
    case 6:
      return images.sadness;
    case 7:
      return images.anxiety;
    default:
      return images.fear;
  }
};

export const getImage = (item: any) => {
  switch (item) {
    case 1:
      return images.facejoy;
    case 2:
      return images.faceanger;
    case 3:
      return images.faceennui;
    case 4:
      return images.faceembarassment;
    case 5:
      return images.facedisgust;
    case 6:
      return images.facesadness;
    case 7:
      return images.faceanxiety;
    default:
      return images.facefear;
  }
};

export const getPictogramas = (item: any) => {
  console.log(item);
  switch (item) {
    case 1:
      return images.bathroom;
    case 2:
      return images.food;
    case 3:
      return images.hurt;
    case 4:
      return images.rest;
    case 5:
      return images.washing;
    case 6:
      return images.water;
    default:
      return images.facefear;
  }
};
