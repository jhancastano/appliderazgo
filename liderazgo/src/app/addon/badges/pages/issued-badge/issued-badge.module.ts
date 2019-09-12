import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IssuedBadgePage } from './issued-badge.page';

const routes: Routes = [
  {
    path: '',
    component: IssuedBadgePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IssuedBadgePage]
})
export class IssuedBadgePageModule {}
