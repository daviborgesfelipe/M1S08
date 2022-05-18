import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  qntdItemPedidos = 0;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.qntdItemPedidos = this.pedidoService.retornaQtdTotalItensPedido();
  }
  numeroQntdTotalItensPedido() {
    return this.pedidoService.retornaQtdTotalItensPedido();
  }
}
