import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SortOrderSelectorPage } from './sort-order-selector.page';

const routes: Routes = [
  {
    path: '',
    component: SortOrderSelectorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SortOrderSelectorPage]
})
export class SortOrderSelectorPageModule {}
