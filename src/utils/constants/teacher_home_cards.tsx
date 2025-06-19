import {theme} from './theme';
export const teacherHomeCards = [
  {
    title: 'Check-In',
    subtitle: 'Registre aqui as emoções e  sentimentos dos seus alunos',
    image: 'insideOut',
    buttonLabel: 'Registrar',
    primaryColor: theme.primary,
    secondaryColor: theme.secondary,
    thirdColor: theme.thirdBlue,
    routeName: 'teacherCheckInView',
  },
  {
    title: 'Avaliação',
    subtitle: 'Registre a avaliação comportamental de habilidades',
    image: 'rank',
    buttonLabel: 'Realizar',
    primaryColor: theme.primaryPink,
    secondaryColor: theme.secondaryPink,
    thirdColor: 'black',
    routeName: 'teacherAssessment',
  },

  {
    title: 'Pictogramas',
    subtitle:
      'Use os pictogramas para mapear desejos dos seus alunos ( ex: beber água)',
    image: 'pictogramas',
    buttonLabel: 'Acessar',
    primaryColor: theme.primaryGreen,
    secondaryColor: theme.secondaryGreen,
    thirdColor: 'black',
    routeName: 'teacherActionView',
  },

  {
    title: 'Atividades',
    subtitle: 'Registrar Atividades realizada e participação do aluno',
    image: 'tasks',
    buttonLabel: 'Acessar',
    primaryColor: theme.primaryRed,
    secondaryColor: theme.secondaryRed,
    thirdColor: 'black',
    routeName: 'teacherActivitieView',
  },
];
