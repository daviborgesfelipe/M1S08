import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBebida } from 'src/app/models/bebida.model';
import { LISTA_BEBIDAS_MOCK } from 'src/app/constants/bebidas.mock';

@Component({
  selector: 'ngf-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.scss']
})
export class BebidaListaComponent implements OnInit {

  listaBebida: IBebida[] = LISTA_BEBIDAS_MOCK;

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.http.get<IBebida[]>("http://localhost:3000/bebidas").subscribe((value: IBebida[]) => {this.listaBebida = value;});
  }

}
