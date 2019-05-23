import { Component, OnInit } from '@angular/core';
import { ToastController,AlertController,ModalController } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { __await } from 'tslib';
import { NovatarefamodalPage } from '../novatarefamodal/novatarefamodal.page';


@Component({
  selector: 'app-listatarefa',
  templateUrl: './listatarefa.page.html',
  styleUrls: ['./listatarefa.page.scss'],
})
export class ListatarefaPage {

  title = "Nova tarefa"

  tarefas = [];
  TAREFAS_KEY = 'tarefas';

  constructor(public toastController: ToastController,
  public alertController: AlertController,
  private storage: Storage,public modalController:ModalController){ 
    this.storage.get(this.TAREFAS_KEY).then((data) => 
    {
      if (data) {
      this.tarefas = data; 
    } 
    });
  }

  async add(tarefa) {
    this.tarefas.push(tarefa);
    this.storage.set(this.TAREFAS_KEY, this.tarefas);
       
    const toast = await this.toastController.create({
      message: 'cadastrado com sucesso',
      duration: 4000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  
  async remove(tarefa) {
    

    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'voce deseja remover?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
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
    // Remover o item selecionado da lista
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);   
  }

  async exibir_modal(){
    const modal = await this.modalController.create({
      component: NovatarefamodalPage
    });

    modal.onDidDismiss().then((retorno) =>{
      this.add(retorno.data)
    })
    await modal.present();
  }
}