import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, ItemSliding,ToastController} from 'ionic-angular';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
// import {SessionStorageService} from 'ngx-webstorage';
import { Observable } from '../../../node_modules/rxjs';

=======
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
>>>>>>> ad2d262b5f7382c4f1d1cd616c33d21914b8ff0b
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
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service: BuhariServiceProvider,
              public toast: ToastController,
              // public session: SessionStorageService,
            ) 
  {
    this.requestItemsSelect();
  }

  requestItemsSelect(){
    this.service.requestItemsSelect().subscribe((resp:any)=>{
      if(resp.ReturnCode == "RRS"){
        this.request_items = resp.Returnvalue;
        this.requestItem = new Array(this.request_items.length);
        console.log("extra items *****",JSON.stringify(this.request_items));
      }
    })
  }

  ionViewDidLoad() {
    this.requestItemsSelect();
    this.requstitemloop();
    console.log('ionViewDidLoad RequestPage');
    // this.tablenum  = this.session.retrieve("tablenumber");
    // console.log("tablenummmmm",this.tablenum);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  requstitemloop() {
    this.subscription = Observable.interval(5000).subscribe(x => {
      this.requestItemsSelect();
    });
  }

  updateRequestItem(position,item){
    if(this.requestItem[position] === true){
      this.sendItem.push(item);
    }
    else{
      console.log("removing item")
      this.sendItem.slice(item,position)
    }
    console.log("Item Selected",JSON.stringify(this.sendItem));  
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

<<<<<<< HEAD
    this.service.placeOrder(this.sendItem,"").subscribe((resp:any)=>{
      if(resp.ReturnCode == "RIS"){
        this.showtoast("Your requst was processed "); 
        console.log(resp.Return);
      }else{
        console.log(resp.Return);
      }
    })
=======
    if(this.sendItem.length != 0){
      this.service.placeOrder(this.sendItem,"").subscribe((resp:any)=>{
        if(resp.ReturnCode == "RIS"){
          this.showtoast("your items has been requested");
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
    
>>>>>>> ad2d262b5f7382c4f1d1cd616c33d21914b8ff0b
  }

  showtoast(message){
    const toast = this.toast.create({
      message: message,
<<<<<<< HEAD
      duration: 6000
=======
      duration: 3000
>>>>>>> ad2d262b5f7382c4f1d1cd616c33d21914b8ff0b
    });
    toast.present();   
  }
}
