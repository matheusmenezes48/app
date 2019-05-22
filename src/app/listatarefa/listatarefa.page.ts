import { Component, OnInit } from '@angular/core';
import { ToastController,AlertController } from '@ionic/angular';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-listatarefa',
  templateUrl: './listatarefa.page.html',
  styleUrls: ['./listatarefa.page.scss'],
})
export class ListatarefaPage {

  title = "Nova tarefa"

  tarefas = [];
  TAREFAS_KEY = 'tarefas';
  nova_tarefa = this.criar_nova_tarefa();

  constructor(public toastController: ToastController,
  public alertController: AlertController,
  private storage: Storage){ 
    this.storage.get(this.TAREFAS_KEY).then((data) => 
    {
      if (data) {
      this.tarefas = data; 
    } 
    });
  }

  async add() {
    this.tarefas.push(this.nova_tarefa);
    this.storage.set(this.TAREFAS_KEY, this.tarefas);
    
    this.nova_tarefa = this.criar_nova_tarefa();
   
    const toast = await this.toastController.create({
      message: 'cadastrado com sucesso',
      duration: 4000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  criar_nova_tarefa() {
   return {
     "descricao":"",
     "horario":""
   }
  }
  
  async remove(tarefa) {
    

    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'voce deseja remover?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'primary',
          handler: async (blah) => {
          }
        }, {
          text: 'Ok',
          handler: async() => {
            // Atualizar formulário com os dados da tarefa cliclada
            const toast = await this.toastController.create({
              message: 'removido com sucesso',
              duration: 3000,
              position: 'top',
              color: 'danger'
            });
            toast.present();

            // Remover o item selecionado da lista
            var i = this.tarefas.indexOf(tarefa);
            this.tarefas.splice(i, 1);
            this.storage.set(this.TAREFAS_KEY, this.tarefas);

          }
        }
      ]
    });
    await alert.present();
  }





  edit(tarefa){    
    // Atualizar formulário com os dados da tarefa cliclada
    this.nova_tarefa = tarefa

    // Remover o item selecionado da lista
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);
    
  }


}
