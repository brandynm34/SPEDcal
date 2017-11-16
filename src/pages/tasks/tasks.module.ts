import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksPage } from './tasks';


@NgModule({
  declarations: [
    TasksPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksPage),
    TranslateModule.forChild()
  ],
  exports: [
    TasksPage
  ]
})
export class TasksPageModule { }