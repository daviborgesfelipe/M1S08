import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BebidaListaComponent } from './pages/bebida-lista/bebida-lista.component';
import { ComidaListaComponent } from './pages/comida-lista/comida-lista.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemCardapioComponent } from './components/item-cardapio/item-cardapio.component';
import { PedidoListaComponent } from './pages/pedido-lista/pedido-lista.component';

const ROUTES: Route[] = [
  {
    path: 'cardapio',
    component: HomeComponent
  },
  {
    path: 'bebidas',
    component: BebidaListaComponent
  },
  {
    path: 'comidas',
    component: ComidaListaComponent
  },
  {
    path: 'pedidos',
    component: PedidoListaComponent
  },
] 

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    BebidaListaComponent,
    ComidaListaComponent,
    HomeComponent,
    ItemCardapioComponent,
    PedidoListaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    //cuida das chamadas ajax, parecido com o fetch, fornece os metodos de busca, editar e pai bola coisa e tal
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
