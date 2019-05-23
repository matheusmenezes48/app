import { Component, OnInit } from '@angular/core';
import { ToastController,AlertController,ModalController } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { __await } from 'tslib';
import { NovacompramodalPage } from '../novacompramodal/novacompramodal.page';


@Component({
  selector: 'app-listacompras',
  templateUrl: './listacompras.page.html',
  styleUrls: ['./listacompras.page.scss'],
})
export class ListacomprasPage {

  compras = [];

 COMPRAS_KEY = 'compras';

  constructor(public toastController: ToastController,public alertController: AlertController, 
    private storage: Storage, public modalController: ModalController){ 
      this.storage.get(this.COMPRAS_KEY).then((data) => 
      {
        if (data) {
        this.compras = data; 
      } 
      });
  }

  async add(compra) {
    this.compras.push(compra);
    this.storage.set(this.COMPRAS_KEY, this.compras);

    const toast = await this.toastController.create({
      message: 'compra agendada com sucesso',
      duration: 4000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }


  
   



   async remove(compra) {
    

    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'voce deseja remover?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Ok',
          handler: async() => {
            // Atualizar formulário com os dados da tarefa cliclada
            const toast = await this.toastController.create({
              message: 'compra removida com sucesso',
              duration: 3000,
              position: 'top',
              color: 'danger'
            });
            toast.present();

            // Remover o item selecionado da lista
            var i = this.compras.indexOf(compra);
            this.compras.splice(i, 1);
            this.storage.set(this.COMPRAS_KEY, this.compras);

          }
        }
      ]
    });
    await alert.present();
  }

  edit(compra){    

    // Remover o item selecionado da lista
    var i = this.compras.indexOf(compra);
    this.compras.splice(i, 1);
    
  }


  async exibir_modal() {
    const modal = await this.modalController.create({
      component: NovacompramodalPage
    });
    modal.onDidDismiss().then((retorno) => {
      this.add(retorno.data)
    })
    await modal.present();
  }






}
