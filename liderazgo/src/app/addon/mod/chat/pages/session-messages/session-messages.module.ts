import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SessionMessagesPage } from './session-messages.page';

const routes: Routes = [
  {
    path: '',
    component: SessionMessagesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SessionMessagesPage]
})
export class SessionMessagesPageModule {}
