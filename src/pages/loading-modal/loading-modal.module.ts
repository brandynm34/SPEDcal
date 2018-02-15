import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadingModalPage } from './loading-modal';

@NgModule({
  declarations: [
    LoadingModalPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadingModalPage),
  ],
})
export class LoadingModalPageModule {}
