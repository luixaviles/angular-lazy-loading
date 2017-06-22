import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdListModule, MdLineModule } from "@angular/material";

import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    MdListModule,
    MdLineModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
