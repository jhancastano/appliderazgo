import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnsupportedModulePage } from './unsupported-module.page';

const routes: Routes = [
  {
    path: '',
    component: UnsupportedModulePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnsupportedModulePage]
})
export class UnsupportedModulePageModule {}
