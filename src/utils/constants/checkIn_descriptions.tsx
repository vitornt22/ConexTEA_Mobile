export function getEmotionByNumber(emotionNumber: number) {
  switch (emotionNumber) {
    case 1:
      return {
        descricao: 'Emoção positiva de satisfação, bem-estar e entusiasmo.',
        comportamentos: [
          'Participa ativamente das aulas',
          'Interage com colegas e professores',
          'Demonstra motivação e energia',
          'Sorridente e comunicativo',
        ],
      };
    case 2:
      return {
        descricao:
          'Emoção de frustração ou insatisfação, geralmente diante de algo percebido como injusto.',
        comportamentos: [
          'Responde de forma agressiva ou ríspida',
          'Se recusa a realizar atividades',
          'Impulsividade ou descontrole',
          'Discussões com colegas',
        ],
      };
    case 3:
      return {
        descricao:
          'Sensação de desinteresse ou falta de estímulo diante da rotina.',
        comportamentos: [
          'Distração frequente',
          'Falta de engajamento nas tarefas',
          'Bocejos ou expressões de desânimo',
          'Reclamações sobre a aula ser "chata"',
        ],
      };
    case 4:
      return {
        descricao: 'Emoção ligada à exposição ou medo do julgamento.',
        comportamentos: [
          'Evita falar ou participar',
          'Abaixar a cabeça, ruborizar',
          'Gaguejar ou hesitar em se expressar',
          'Se isola socialmente',
        ],
      };
    case 5:
      return {
        descricao: 'Rejeição a algo considerado repulsivo ou desconfortável.',
        comportamentos: [
          'Aversão a tarefas ou materiais (ex: sujeira, alimentos)',
          'Expressões faciais de repulsa',
          'Reclamações sobre o ambiente',
          'Tentativa de se afastar da situação',
        ],
      };
    case 6:
      return {
        descricao: 'Emoção de perda, frustração ou decepção.',
        comportamentos: [
          'Choro ou olhos marejados',
          'Falta de interesse nas atividades',
          'Queda no rendimento escolar',
          'Isolamento e silêncio',
        ],
      };
    case 7:
      return {
        descricao: 'Emoção ligada à preocupação excessiva ou medo antecipado.',
        comportamentos: [
          'Agitação ou inquietação',
          'Roer unhas, balançar pernas',
          'Medo de errar ou de se expor',
          'Dificuldade de concentração',
        ],
      };
    case 8:
      return {
        descricao: 'Emoção de proteção diante de algo percebido como ameaça.',
        comportamentos: [
          'Evita certas pessoas, lugares ou atividades',
          'Fica paralisado ou hesitante',
          'Expressa insegurança constante',
          'Aderência a figuras de segurança (professores, colegas)',
        ],
      };
    default:
      return {
        nome: 'Desconhecida',
        path: 'unknown',
        descricao: 'Emoção não identificada.',
        comportamentos: [],
      };
  }
}
