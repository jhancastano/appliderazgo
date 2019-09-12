import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelfEnrolPasswordPage } from './self-enrol-password.page';

const routes: Routes = [
  {
    path: '',
    component: SelfEnrolPasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelfEnrolPasswordPage]
})
export class SelfEnrolPasswordPageModule {}
