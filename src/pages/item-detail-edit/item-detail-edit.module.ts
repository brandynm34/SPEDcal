import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailEditPage } from './item-detail-edit';



@NgModule({
  declarations: [
    ItemDetailEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailEditPage),

  ],
})
export class ItemDetailEditPageModule {}
