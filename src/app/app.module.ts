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
import { HttpClientModule } from '@angular/common/http'

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
  }
] 

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    BebidaListaComponent,
    ComidaListaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    //cuida das chamadas ajax, parecido com o fetch
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
