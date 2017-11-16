import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { TasksPage } from './tasks';

@NgModule({
  declarations: [
    TasksPage,
  ],
  imports: [
    IonicModule.forRoot(TasksPage),
  ],
})
export class TasksPageModule {}
