import { Injectable } from '@angular/core';
import { IBebida } from '../models/bebida.model';
import { IComida } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  itensPedidosLista: IComida[] | IBebida[] = [];

  constructor() { }

  retornaQtdTotalItensPedido(): number {
    return this.itensPedidosLista.length;
  }

  adicionarItemPedido(item: IComida | IBebida) {
    this.itensPedidosLista.push(item);
    console.log('itensPedidosLista', this.itensPedidosLista)
  }
  adicionarItensNoPedido(alimento: IComida | IBebida, quantidade: number) {
    const itens = Array(quantidade).fill(alimento);
    this.itensPedidosLista.push(...itens);
  }

  limparPedido() {
    this.itensPedidosLista = [];
  }

  removerItemPedido(id: number) {
    const alimentoIndex = this.itensPedidosLista.findIndex((alimento) => alimento.id === id)
    this.itensPedidosLista.splice(alimentoIndex, 1);
  }

  buscarItemPedido(): IComida[] | IBebida[] {
    return this.itensPedidosLista;
  }
}
// - criar propriedade pedido que será uma lista de itens
// - criar método para retornar o total de itens do pedido
// - criar método para inserir um item
// - criar método para  limpar a lista
// - criar método para  remover um tem da lista
// - criar método para  buscar itens do pedido
