import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpaceUsagePage } from './space-usage.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceUsagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpaceUsagePage]
})
export class SpaceUsagePageModule {}
