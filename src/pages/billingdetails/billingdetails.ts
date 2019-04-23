import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toast: ToastController,
              public modalCtrl: ModalController,
              public service: BuhariServiceProvider) {
  }
   public itemdetails:any=[];

   expanded: any;
   contracted: any;
   showIcon = true;
   preload  = true;
   public billing:boolean = false;
   public no_billing:boolean = false;
  ionViewDidLoad() {
    this.service.billing().subscribe((resp:any)=>{
      if(resp.ReturnCode == "RRS"){
        this.itemdetails = resp.Returnvalue;
        if(this.itemdetails.length == 0){
          this.no_billing = true;
          this.billing = false;
        }
        else{
          this.no_billing = false;
          this.billing = true;
        }
        console.log("billing details&&&&&&&&&&&&&&&&",this.itemdetails);
      }
    })
    console.log('ionViewDidLoad BillingdetailsPage');
  }

  expand(param) {
    //send ready for billing will come here
    this.service.readyForBilling(param).subscribe((resp:any)=>{
      if(resp.ReturnCode == "RUS"){
        this.showtoast("Waiter Will soon come with Bill");     
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
      else{
        this.showtoast(resp.Return);
        // this.showtoast("There is problem in Generate the Bill");
      }
    })
  }

  showtoast(message){
    const toast = this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();   
  }
}
