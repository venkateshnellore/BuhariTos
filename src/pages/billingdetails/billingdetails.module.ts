import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillingdetailsPage } from './billingdetails';

@NgModule({
  declarations: [
    BillingdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BillingdetailsPage),
  ],
})
export class BillingdetailsPageModule {}
