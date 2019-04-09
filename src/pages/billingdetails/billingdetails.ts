import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BillingdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billingdetails',
  templateUrl: 'billingdetails.html',
})
export class BillingdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   public itemdetails:any=[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingdetailsPage');

    this.itemdetails=[
      { id:"1",item_name:"chicken biryani * 2",item_price:"150",},
      {id:"2",item_name:"chicken biryani 65 * 2",item_price:"150",},
      {id:"3",item_name:"gobi * 2",item_price:"150",},
      {id:"4",item_name:"chicken special biryani * 2",item_price:"150",},
    ]
  }

}
