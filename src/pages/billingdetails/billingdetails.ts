import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController) {
  }
   public itemdetails:any=[];

   expanded: any;
   contracted: any;
   showIcon = true;
   preload  = true;
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad BillingdetailsPage');

    this.itemdetails=[
      { id:"1",item_name:"chicken biryani x2",item_price:"150",},
      {id:"2",item_name:"chicken biryani 65 x2",item_price:"150",},
      {id:"3",item_name:"gobi x2",item_price:"150",},
      {id:"4",item_name:"chicken special biryani x2",item_price:"150",},
    ]
  }

  expand() {
    //send ready for billing will come here
    

    //open modal for feedback
    this.expanded = true;
    this.contracted = !this.expanded;
    this.showIcon = false;
    setTimeout(() => {
      const modal = this.modalCtrl.create(FeedbackPage);
      modal.onDidDismiss(data => {
        this.expanded = false;
        this.contracted = !this.expanded;
        setTimeout(() => this.showIcon = true, 30);
      });
      modal.present();
    },         200);
  }

}
