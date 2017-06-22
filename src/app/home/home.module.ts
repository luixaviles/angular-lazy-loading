import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdListModule, MdLineModule } from "@angular/material";

import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    MdListModule,
    MdLineModule,
    CommonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
