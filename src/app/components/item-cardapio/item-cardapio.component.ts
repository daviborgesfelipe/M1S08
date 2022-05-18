import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBebida } from 'src/app/models/bebida.model';
import { IComida } from 'src/app/models/comida.model';

@Component({
  selector: 'ngf-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.scss']
})
export class ItemCardapioComponent implements OnInit {
  quantidade = 0;

  @Input() alimento?: IComida | IBebida;

  @Output() adicionaAoPedido = new EventEmitter<IComida | IBebida>();

  @Output() adicionaItensAoPedido = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  adicionarAoPedido(){
    this.adicionaAoPedido.emit(this.alimento);
  }

  adicionarItensAoPedido(){
    const itemQuantidade = {
      alimento: this.alimento,
      quantidade: this.quantidade
    }

    this.adicionaItensAoPedido.emit(itemQuantidade)
  }

  aumentarQuantidade() {
    this.quantidade = this.quantidade + 1;
  }

  diminuirQuantidade() {
    this.quantidade = this.quantidade - 1;
  }
}
