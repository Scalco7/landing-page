import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { ButtonDowloadComponent } from './components/button-dowload/button-dowload.component';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { BottomComponent } from './components/bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    ButtonDowloadComponent,
    ComoFuncionaComponent,
    ComentariosComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
