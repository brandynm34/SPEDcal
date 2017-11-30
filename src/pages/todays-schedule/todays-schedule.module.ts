import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodaysSchedulePage } from './todays-schedule';

@NgModule({
  declarations: [
    TodaysSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(TodaysSchedulePage),
  ],
})
export class TodaysSchedulePageModule {}
