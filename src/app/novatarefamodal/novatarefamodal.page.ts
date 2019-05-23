import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-novatarefamodal',
  templateUrl: './novatarefamodal.page.html',
  styleUrls: ['./novatarefamodal.page.scss'],
})
export class NovatarefamodalPage implements OnInit {

  nova_tarefa = {
    "descricao":"",
     "horario":""
  }
  constructor(public modalController : ModalController) { }

  ngOnInit() {
  }

  add() {
    this.modalController.dismiss(this.nova_tarefa);
  }
}
