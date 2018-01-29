import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupMembersPage } from './group-members';

@NgModule({
  declarations: [
    GroupMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupMembersPage),
  ],
  exports: [
    GroupMembersPage
  ]
})
export class GroupMembersPageModule {}
