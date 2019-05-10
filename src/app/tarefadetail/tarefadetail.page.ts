import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarefadetail',
  templateUrl: './tarefadetail.page.html',
  styleUrls: ['./tarefadetail.page.scss'],
})
export class TarefadetailPage implements OnInit {

  constructor(public route: ActivatedRoute) { }

  task;
  
  ngOnInit() {
    this.task =(this.route.snapshot.paramMap.get('task'));
    
  }
  
  

}
