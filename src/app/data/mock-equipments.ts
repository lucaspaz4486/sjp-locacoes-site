export interface Equipment {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

export const EQUIPMENTS: Equipment[] = [
  {
    id: 1,
    name: 'Andaime Tubular completo',
    description:
      'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.0m e painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime',
  },
  {
    id: 2,
    name: 'Painel Metálico Andaime 1.0m e 1.5m',
    description:
      'Estes painéis metálicos para andaime possuem 1 metro e 1.5m e auxiliam no desenvolvimento vertical das construções, ou também para efeito de reparos, reformas, pinturas, torres de acesso e outros.',
    imageUrl: 'assets/imagens/painel-metalico.png',
    category: 'Andaime',
  },
  {
    id: 3,
    name: 'Escada para Andaime 1.0m e 1.5m',
    description:
      'As escadas para andaime são peças necessárias para dar acesso ao nível de trabalho. A escada de andaime de 1.0m e 1.5 e proporciona acesso a elevações de maneira segura.',
    imageUrl: 'assets/imagens/escada-andaime.png',
    category: 'Andaime',
  },
  {
    id: 4,
    name: 'Guarda corpo pa Andaime 1.0m e 1.5m',
    description:
      'O guarda-corpo é peça essencial para a segurança e proteção nos andaimes. Este guarda-corpo para andaime possui 1.0m e 1.5m e deve sempre ser fixado no nível de trabalho do andaime.',
    imageUrl: 'assets/imagens/guarda-corpo.png',
    category: 'Andaime',
  },
  {
    id: 5,
    name: 'Piso Metálico para Andaime 1.0m e 1.5m',
    description:
      'O piso metálico para andaime de 1 m possui a finalidade de proporcionar maior estabilidade para os trabalhadores que realizam tarefas em cima de andaimes. O piso metálico para andaime de 1.0m e 1.5m possui furos e ranhuras que impedem o acúmulo de água, e ao mesmo tempo torna a superfície do piso metálico para andaime antiderrapante, proporcionando segurança.',
    imageUrl: 'assets/imagens/piso-metalico.png',
    category: 'Andaime',
  },
  {
    id: 6,
    name: 'Sapata Fixa para Andaime',
    description:
      'Sapata fixa para andaime é usada para dar maior firmeza na base da torre de andaime.',
    imageUrl: 'assets/imagens/sapata-fixa.png',
    category: 'Andaime',
  },
  {
    id: 7,
    name: 'Rodízio para Andaime',
    description:
      'Rodízios para andaime são utilizados para facilitar o deslocamento de torres de andaime.',
    imageUrl: 'assets/imagens/rodizio.png',
    category: 'Andaime',
  },
  {
    id: 8,
    name: 'Trava Diagonal para Andaimes',
    description: 'As travas diagonais são ideais para o travamento dos montantes de andaimes.',
    imageUrl: 'assets/imagens/trava-diagonal.png',
    category: 'Andaime',
  },
  {
    id: 9,
    name: 'Betoneira 400L',
    description:
      'Ideal para misturar concreto e argamassa em obras de médio a grande porte. Robusta e de fácil operação.',
    imageUrl: 'assets/imagens/betoneira.png',
    category: 'Concreto',
  },
  {
    id: 10,
    name: 'Martelete',
    description:
      'Perfeito para demolir pequenas estruturas de concreto, abrir canaletas para tubulação e remover revestimentos.',
    imageUrl: 'assets/imagens/martelete.png',
    category: 'Demolição',
  },
  {
    id: 11,
    name: 'Escoras',
    description:
      'As Escoras Metálicas são perfeitas para escorar provisoriamente elementos estruturais, como lajes e vigas. Com altura ajustável de até 5 metros, elas oferecem flexibilidade e precisão, permitindo ajustes conforme a demanda da obra. Além da altura, outra vantagem das escoras metálicas é a praticidade: são fáceis de montar e desmontar, o que garante mais rapidez no processo.',
    imageUrl: 'assets/imagens/escora-metalica.png',
    category: 'Escoras',
  },
  {
    id: 12,
    name: 'Serra Policorte',
    description:
      'A serra policorte é destinada a trabalhar como ferramenta fixa, para cortes longitudinais e transversais em linha reta e em ângulo de até 45° em metais. A ferramenta de policorte possui seu funcionamento sem a utilização de água.',
    imageUrl: 'assets/imagens/serra-policorte.png',
    category: 'Serra',
  },
  {
    id: 13,
    name: 'Vibrador de Concreto',
    description:
      'Equipamento essencial para eliminar bolhas de ar e garantir a resistência do concreto.',
    imageUrl: 'assets/imagens/vibrador.png',
    category: 'Concreto',
  },
];
