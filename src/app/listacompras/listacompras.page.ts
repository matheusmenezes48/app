import { Component, OnInit } from '@angular/core';
import { ToastController,AlertController } from '@ionic/angular';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-listacompras',
  templateUrl: './listacompras.page.html',
  styleUrls: ['./listacompras.page.scss'],
})
export class ListacomprasPage {

  compras = [];

 COMPRAS_KEY = 'compras';

  nova_compra = this.criar_nova_compra();
  constructor(public toastController: ToastController,public alertController: AlertController, 
    private storage: Storage){ 
      this.storage.get(this.COMPRAS_KEY).then((data) => 
      {
        if (data) {
        this.compras = data; 
      } 
      });
  }

  async add() {
    this.compras.push(this.nova_compra);
    this.storage.set(this.COMPRAS_KEY, this.compras);

    this.nova_compra = this.criar_nova_compra();

    const toast = await this.toastController.create({
      message: 'compra agendada com sucesso',
      duration: 4000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }


  criar_nova_compra() {
    return {
      "produto":"",
      "valor":""
    }
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
    // Atualizar formulário com os dados da tarefa cliclada
    this.nova_compra = compra

    // Remover o item selecionado da lista
    var i = this.compras.indexOf(compra);
    this.compras.splice(i, 1);
    
  }






}
