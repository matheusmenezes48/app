import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-compradetail',
  templateUrl: './compradetail.page.html',
  styleUrls: ['./compradetail.page.scss'],
})
export class CompradetailPage implements OnInit {

  constructor(public route: ActivatedRoute) { }

  task;

  ngOnInit() {
    this.task =(this.route.snapshot.paramMap.get('task'));
  }

}
