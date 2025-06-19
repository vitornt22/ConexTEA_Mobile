import {images} from './images';

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
