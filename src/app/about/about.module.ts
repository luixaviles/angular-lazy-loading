import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

import { RouterModule } from '@angular/router';

import { MdCardModule } from "@angular/material";

@NgModule({
  imports: [
    MdCardModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AboutComponent },
    ])
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
