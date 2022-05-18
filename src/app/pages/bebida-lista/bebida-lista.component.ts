import { Component, OnInit } from '@angular/core';
import { IBebida } from 'src/app/models/bebida.model';
import { BebidaService } from 'src/app/services/bebida.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.scss']
})
export class BebidaListaComponent implements OnInit {

  listaBebida: IBebida[] = [];

  constructor(
    private bebidaService: BebidaService,
    private pedidoService: PedidoService
    ) { 

  }

  ngOnInit(): void {
    this.bebidaService.devolverBebidas()
      .subscribe((resultado: IBebida[]) => {
        this.listaBebida = resultado;
      })
  }
  adicionarBebida(bebida: IBebida){
    this.pedidoService.adicionarItemPedido(bebida)
  }
  adicionarBebidaComQntd(alimentoComQtd: any){
    this.pedidoService.adicionarItensNoPedido(alimentoComQtd.alimento, alimentoComQtd.quantidade);
  }
}
