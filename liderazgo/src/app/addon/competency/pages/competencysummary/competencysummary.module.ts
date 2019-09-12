import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompetencysummaryPage } from './competencysummary.page';

const routes: Routes = [
  {
    path: '',
    component: CompetencysummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompetencysummaryPage]
})
export class CompetencysummaryPageModule {}
