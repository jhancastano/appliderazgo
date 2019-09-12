import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoursecompetenciesPage } from './coursecompetencies.page';

const routes: Routes = [
  {
    path: '',
    component: CoursecompetenciesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoursecompetenciesPage]
})
export class CoursecompetenciesPageModule {}
