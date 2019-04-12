import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  public requestItem:boolean[];
  public sendItem:any=[];
  public request_items = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service: BuhariServiceProvider) 
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
  requestitem(custom_req_item){
    this.dummyarr=[];
    for(var i=0;i<this.request_items.length;i++){
      if(this.request_items[i].checked === true){
        this.dummyarr.push(this.request_items[i])
      }
    }
    console.log("Request Item from Checkbox",this.dummyarr);
  }
}
