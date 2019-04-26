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
    // Remover o item selecionado da lista
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
  }
  edit(tarefa){    
    // Atualizar formulário com os dados da tarefa cliclada
    this.nova_tarefa = tarefa

    // Remover o item selecionado da lista
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
  }

  tarefas = [];
 
 

}
