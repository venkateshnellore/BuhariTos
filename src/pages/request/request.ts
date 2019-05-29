import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
import { SessionStorageService } from 'ngx-webstorage';

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  public requestItem:boolean[];
  public sendItem:any=[];
  public request_items = [];
  public tablenum;
  public subscription;
  public hoteldetails:any={};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service: BuhariServiceProvider,
              public toast: ToastController,
              public session: SessionStorageService
            ) 
  {
    this.hoteldetails = this.session.retrieve("hoteldetails");
    this.requestItemsSelect();
  }

  requestItemsSelect(){
    this.service.requestItemsSelect().subscribe((resp:any)=>{
      if(resp.ReturnCode == "RRS"){
        this.request_items = resp.Returnvalue;
        console.log("extra items *****",JSON.stringify(this.request_items));
      }
    })
  }

  ionViewDidLoad() {
    this.requestItemsSelect();
    console.log('ionViewDidLoad RequestPage');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public dummyarr:any=[];
  public dummyobj:any={
    "food_id":"",
    "quantity":0,
    "order_status_id":5
  };
  checkbox(param){
    console.log("test****************",param);
  }
  requestitem(){
    this.sendItem=[];
    this.dummyarr=[];
    console.log("********",JSON.stringify(this.request_items));
    for(var i=0;i<this.request_items.length;i++){
      if(this.request_items[i].checked === true){
        this.dummyarr.push(this.request_items[i])
      }
    }
    for(var j=0;j<this.dummyarr.length;j++){
      let tempobj = {
        "food_id":this.dummyarr[j].food_id,
        "quantity":0,
        "order_status_id":5
      }
      console.log("Test "+j+"-",JSON.stringify(tempobj));
      this.sendItem.push(tempobj);
    }
    console.log("Request Item from Checkbox",this.sendItem);

    if(this.sendItem.length != 0){
      this.service.placeOrder(this.sendItem,"").subscribe((resp:any)=>{
        if(resp.ReturnCode == "RIS"){
          this.showtoast("your items has been requested");
          this.requestItemsSelect();
          for(var i=0;i<this.request_items.length;i++){
              this.request_items[i].checked = false;
          }   
        console.log(resp.Return);
        }else{
          this.showtoast("The Item you Requested has been disabled");
          console.log(resp.Return);
        }
      })
    }else{
      this.showtoast("Please Choose Items Before You Request");
    }
    
  }

  showtoast(message){
    const toast = this.toast.create({
      message: message,
      duration: 3000
    });
    toast.present();   
  }
}
