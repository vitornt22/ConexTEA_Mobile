export const getActivityTypeDescription = (type: number) => {
  switch (type) {
    case 1:
      return {
        name: 'Linguagem e Comunicação',
        description:
          'Atividades voltadas para desenvolver a comunicação verbal, não verbal, expressão de sentimentos, compreensão de comandos e interação através da fala, gestos, sinais ou expressões.',
      };
    case 2:
      return {
        name: 'Raciocínio Cognitivo',
        description:
          'Estimula o pensamento lógico, a resolução de problemas, memória, atenção e desenvolvimento de estratégias. Inclui atividades como jogos de encaixe, sequência, categorização e desafios cognitivos.',
      };
    case 3:
      return {
        name: 'Motricidade e Coordenação',
        description:
          'Foca no desenvolvimento da coordenação motora fina (como recorte, pintura, manuseio de objetos) e motora ampla (como correr, pular, equilíbrio e movimentos corporais).',
      };
    case 4:
      return {
        name: 'Atividades Sensorial-Exploratórias',
        description:
          'Estimula os sentidos (tato, olfato, audição, visão, paladar) por meio de experiências como manuseio de texturas, sons, luzes, cheiros, líquidos e materiais diversos, promovendo a exploração e percepção sensorial.',
      };
    case 5:
      return {
        name: 'Autonomia e Organização',
        description:
          'Desenvolve habilidades de cuidado pessoal e organização do ambiente. Envolve atividades como arrumar materiais, guardar brinquedos, vestir-se, higiene pessoal e seguir rotinas de forma mais independente.',
      };
    case 6:
      return {
        name: 'Interação e Participação',
        description:
          'Estimula a socialização, trabalho em grupo, empatia e respeito às regras sociais. Envolve atividades que promovem a cooperação, escuta ativa, participação em rodas, dinâmicas e brincadeiras coletivas.',
      };
    default:
      return {
        name: 'Desconhecido',
        description: 'Tipo de atividade não identificado.',
      };
  }
};
