import {images} from './images';

export const getReviewIcon = (type: string) => {
  switch (type) {
    case 'Review':
      return images.reviewIcon;
    case 'CheckIn':
      return images.emoctionsIcon;
    case 'Activitie':
      return images.activitiesIcon;
    case 'Action':
      return images.actionsIcon;
    default:
      break;
  }
};
