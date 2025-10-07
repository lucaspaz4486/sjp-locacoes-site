// Define a "forma" de um objeto de equipamento
export interface Equipment {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

// Nossa lista de equipamentos de exemplo
export const EQUIPMENTS: Equipment[] = [
  {
    id: 1,
    name: 'Betoneira 400L',
    description: 'Ideal para misturar concreto e argamassa em obras de médio a grande porte. Robusta e de fácil operação.',
    imageUrl: 'assets/imagens/betoneira.png',
    category: 'Concreto'
  },
  {
    id: 2,
    name: 'Martelete Rompedor 5kg',
    description: 'Perfeito para demolir pequenas estruturas de concreto, abrir canaletas para tubulação e remover revestimentos.',
    imageUrl: 'assets/imagens/martelete.png',
    category: 'Demolição'
  },
  {
    id: 3,
    name: 'Andaime Tubular completo',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.0m e painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime'
  },
  {
    id: 4,
    name: 'Compactador de Solo (Sapo)',
    description: 'Utilizado para compactar solos granulares, como areia e cascalho, em valas, fundações e reparos de asfalto.',
    imageUrl: 'assets/imagens/compactador.png',
    category: 'Compactação'
  },
  {
    id: 5,
    name: 'Vibrador de Concreto',
    description: 'Equipamento essencial para eliminar bolhas de ar e garantir a resistência do concreto.',
    imageUrl: 'assets/imagens/vibrador.png',
    category: 'Concreto'
  },
  {
    id: 6,
    name: 'Painel Metálico Andaime 1m',
    description: 'Estes painéis metálicos para andaime possuem 1 metro e auxiliam no desenvolvimento vertical das construções, ou também para efeito de reparos, reformas, pinturas, torres de acesso e outros.',
    imageUrl: 'assets/imagens/painel-metalico-1m.png',
    category: 'Andaime'
  },
  {
    id: 7,
    name: 'Painel Metálico Andaime 1.5m',
    description: 'Estes painéis metálicos para andaime possuem 1.5 metros e auxiliam no desenvolvimento vertical das construções, ou também para efeito de reparos, reformas, pinturas, torres de acesso e outros.',
    imageUrl: 'assets/imagens/painel-metalico-1.5m.png',
    category: 'Andaime'
  },
  {
    id: 8,
    name: 'Escada para Andaime 1m',
    description: 'As escadas para andaime são peças necessárias para dar acesso ao nível de trabalho. A escada de andaime de 1 m proporciona acesso a elevações de maneira segura.',
    imageUrl: 'assets/imagens/escada-andaime-1m.png',
    category: 'Andaime'
  },
  {
    id: 9,
    name: 'Andaime Tubular 1.5m x 1.5m',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime'
  },
  {
    id: 10,
    name: 'Andaime Tubular 1.5m x 1.5m',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime'
  },
  {
    id: 11,
    name: 'Andaime Tubular 1.5m x 1.5m',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime'
  },
  {
    id: 12,
    name: 'Andaime Tubular 1.5m x 1.5m',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime'
  },
  {
    id: 13,
    name: 'Andaime Tubular 1.5m x 1.5m',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime'
  },
  {
    id: 14,
    name: 'Andaime Tubular 1.5m x 1.5m',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime'
  },
  {
    id: 15,
    name: 'Andaime Tubular 1.5m x 1.5m',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime'
  },
  {
    id: 16,
    name: 'Andaime Tubular 1.5m x 1.5m',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime'
  },
  {
    id: 17,
    name: 'Andaime Tubular 1.5m x 1.5m',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime'
  },
  {
    id: 18,
    name: 'Andaime Tubular 1.5m x 1.5m',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/imagens/andaime.png',
    category: 'Andaime'
  },
];