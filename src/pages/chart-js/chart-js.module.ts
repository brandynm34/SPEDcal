import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartJsPage } from './chart-js';

@NgModule({
  declarations: [
    ChartJsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartJsPage),
  ],
})
export class ChartJsPageModule {} 
