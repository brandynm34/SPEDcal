import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupCreatePage } from './group-create';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GroupCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(GroupCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    GroupCreatePage
  ]
})
export class GroupCreatePageModule {}
