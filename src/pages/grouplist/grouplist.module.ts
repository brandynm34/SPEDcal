import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { GrouplistPage } from './grouplist';

@NgModule({
  declarations: [
    GrouplistPage,
  ],
  imports: [
    IonicPageModule.forChild(GrouplistPage),

  ],
  exports: [
  
  ]
})
export class GrouplistPageModule {}
