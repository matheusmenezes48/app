import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovacompramodalPage } from './novacompramodal.page';

const routes: Routes = [
  {
    path: '',
    component: NovacompramodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovacompramodalPage]
})
export class NovacompramodalPageModule {}
