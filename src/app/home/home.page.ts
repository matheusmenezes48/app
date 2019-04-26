import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Nova tarefa"

  nova_tarefa = this.criar_nova_tarefa();

  add() {
    this.tarefas.push(this.nova_tarefa);
    this.nova_tarefa = this.criar_nova_tarefa();
   
  }

  criar_nova_tarefa() {
   return {
     "descricao":"",
     "horario":""
   }
  }
  remove(tarefa) {
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
  }

  tarefas = [
    {
      "descricao":"Ir para o IFPI",
      "horario":"18:00"
    },
    {
      "descricao":"Jogar bola",
      "horario":"13:00"
    },
    {
      "descricao":"Comer carneiro",
      "horario":"22:00"
    },
  ];
 
 

}
