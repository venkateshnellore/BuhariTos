import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
// import {SessionStorageService} from 'ngx-webstorage';
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
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service: BuhariServiceProvider,
              // public session: SessionStorageService,
            ) 
  {
    this.service.requestItemsSelect().subscribe((resp:any)=>{
      if(resp.ReturnCode == "RRS"){
        this.request_items = resp.Returnvalue;
        this.requestItem = new Array(this.request_items.length);
        console.log("extra items *****",JSON.stringify(this.request_items));
      }
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
    // this.tablenum  = this.session.retrieve("tablenumber");
    // console.log("tablenummmmm",this.tablenum);
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
  requestitem(custom_req_item){
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

    this.service.placeOrder(this.sendItem,"").subscribe((resp:any)=>{
      if(resp.ReturnCode == "RIS"){
        console.log(resp.Return);
      }else{
        console.log(resp.Return);
      }
    })
  }

}
