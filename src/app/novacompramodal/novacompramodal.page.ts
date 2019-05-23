import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-novacompramodal',
  templateUrl: './novacompramodal.page.html',
  styleUrls: ['./novacompramodal.page.scss'],
})
export class NovacompramodalPage implements OnInit {

  constructor(public modalController:ModalController) { }


  nova_compra = {
    "produto":"",
    "valor":""
  }
  ngOnInit() {
  }
  add() {
    this.modalController.dismiss(this.nova_compra);
  }
}
