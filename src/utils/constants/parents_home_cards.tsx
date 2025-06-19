import {theme} from './theme';

export const parentsHomeCards = [
  {
    title: 'Evolução',
    subtitle:
      'Confira os gráficos de evolução das habilidade  e comportamentos do aluno',
    image: 'graphs',
    buttonLabel: 'Acessar',
    primaryColor: theme.primary,
    secondaryColor: theme.secondary,
    thirdColor: theme.thirdBlue,
    routeName: 'evolution',
  },
  {
    title: 'Atividades',
    subtitle: 'Confira o comportamento do aluno nas atividade registradas',
    image: 'tasks',
    buttonLabel: 'Acessar',
    primaryColor: theme.primaryPurple,
    secondaryColor: theme.secondaryPurple,
    thirdColor: 'black',
    routeName: 'activities',
  },
  {
    title: 'Avaliações',
    subtitle:
      'Confira os Rankings avaliativos no contexto emocional e comportamental de Valentina.',
    image: 'rank',
    buttonLabel: 'Acessar',
    primaryColor: theme.primaryRed,
    secondaryColor: theme.secondaryRed,
    thirdColor: theme.thirdRed,
    routeName: 'assessments',
  },
  {
    title: 'PEI',
    subtitle:
      'Confira os detalhes do Plano Educacional Individualizado (PEI) do seu filho.',
    image: 'report',
    buttonLabel: 'Acessar',
    primaryColor: theme.primaryGreen,
    secondaryColor: theme.secondaryGreen,
    thirdColor: 'black',
    routeName: 'PEI',
  },
];
