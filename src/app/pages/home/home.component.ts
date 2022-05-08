import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LISTA_MENU_MOCK } from 'src/app/constants/menu.mock';
import { IMenu } from 'src/app/models/menu.model';

@Component({
  selector: 'ngf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaMenu: IMenu[] = LISTA_MENU_MOCK;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.listaMenu))
    // this.http.get<IMenu[]>("http://localhost:3000/cardapio").subscribe((value: IMenu[]) => {this.listaMenu = value;})
  }

}
