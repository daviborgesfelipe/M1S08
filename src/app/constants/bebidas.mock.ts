import { IBebida } from "../models/bebida.model";

export const LISTA_BEBIDAS_MOCK: IBebida[] = [
    { 
      id: 2,
      titulo: 'Refrigerante 1',
      enderecoImagem: '/assets/img/refrigerante.png',
      descricao: 'Guarana',
      valor: 23
    },
    { 
      id: 1,
      titulo: 'Refrigerante 2',
      enderecoImagem: '/assets/img/refrigerante.png',
      descricao: 'Coca-cola',
      valor: 7
    }
];