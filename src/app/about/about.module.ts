import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { MdCardModule } from "@angular/material";

@NgModule({
  imports: [
    MdCardModule,
    CommonModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
