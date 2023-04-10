import { Component } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent {
  public comentarios: string[][] = [
    ["Marry from Canada", "It was hard to discipline myself in the past. The rewards deffinetly help me achieve my goals."],
    ["Maria Silva do Brasil", "Consegui guardar dinheiro para comprar uma casa graças ao app de finanças pessoais."],
    ["Pedro Gomez da Espanha", "Economizei dinheiro com o aplicativo e finalmente realizei a viagem dos meus sonhos."],
    ["Sarah Lee dos Estados Unidos", "Atingi minhas metas financeiras graças ao app de economia."],
    ["Jorge Hernandez do México", "Consegui economizar como freelancer com a ajuda do aplicativo de finanças pessoais."],
    ["Ana Souza de Portugal", "Fiz da economia de dinheiro uma tarefa fácil e divertida graças ao aplicativo."],
  ];

  public idComent: number = 0;

  addIdComent(){
    if(this.idComent < this.comentarios.length-1){
      this.idComent = this.idComent + 1
    }
    else{
      this.idComent = 0
    }
  }

  subIdComent(){
    if(this.idComent > 0){
      this.idComent = this.idComent - 1
    }
    else{
      this.idComent = this.comentarios.length - 1
    }
  }
}
