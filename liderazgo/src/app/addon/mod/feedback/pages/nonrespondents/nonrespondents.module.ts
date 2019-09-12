import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NonrespondentsPage } from './nonrespondents.page';

const routes: Routes = [
  {
    path: '',
    component: NonrespondentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NonrespondentsPage]
})
export class NonrespondentsPageModule {}
