// Define a "forma" de um objeto de equipamento
export interface Equipment {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

// Nossa lista de equipamentos de exemplo
export const EQUIPMENTS: Equipment[] = [
  {
    id: 1,
    name: 'Betoneira 400L',
    description: 'Ideal para misturar concreto e argamassa em obras de médio a grande porte. Robusta e de fácil operação.',
    imageUrl: 'assets/betoneira.png' // <-- CAMINHO CORRETO
  },
  {
    id: 2,
    name: 'Martelete Rompedor 5kg',
    description: 'Perfeito para demolir pequenas estruturas de concreto, abrir canaletas para tubulação e remover revestimentos.',
    imageUrl: 'assets/martelete.png' // <-- CAMINHO CORRETO
  },
  {
    id: 3,
    name: 'Andaime Tubular 1.5m x 1.5m',
    description: 'Estrutura modular para trabalhos em altura, montagem rápida e segura. Painéis de 1.5m de altura e largura.',
    imageUrl: 'assets/andaime.png' // <-- CAMINHO CORRETO
  },
  {
    id: 4,
    name: 'Compactador de Solo (Sapo)',
    description: 'Utilizado para compactar solos granulares, como areia e cascalho, em valas, fundações e reparos de asfalto.',
    imageUrl: 'assets/compactador.png' // <-- CAMINHO CORRETO
  }
];