import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';

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
   public noItems:any=[];
  ionViewDidLoad() {
    this.service.billing().subscribe((resp:any)=>{
      if(resp.ReturnCode == "RRS"){
        this.itemdetails = resp.Returnvalue;
        this.noItems = this.itemdetails.items;
        if(this.noItems.length == 0){
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
        this.showtoast("Bearer Will soon come with Bill");     
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
      else if(resp.ReturnCode == "INS"){
        this.showtoast("Sorry the items you ordered is not yet served.")
      }
      else if(resp.ReturnCode == "WVE"){
        this.showtoast("Sorry No Order has been placed.");
      }
      else{
        this.showtoast(resp.Return);
      }
    })
  }

  showtoast(message){
    const toast = this.toast.create({
      message: message,
      duration: 3000
    });
    toast.present();   
  }
}
