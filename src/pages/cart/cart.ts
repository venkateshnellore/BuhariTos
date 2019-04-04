import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public item_count = 1;
  public total = 0;
  public tax = 30;
  public ordercount = 0;
  public order:any;
  public removefromcart:any=[];
  public item_price:any;
  public billing:any = [];
  items = [
    {
      imageUrl: 'assets/imgs/veg.png',
      title: 'Chicken Fried Rice',
      rate: 140,
      count: this.item_count,
      itemtotal: 140,
    },
    {
      imageUrl: 'assets/imgs/veg.png',
      title: 'Mutton Biriyani',
      rate: 240,
      count: this.item_count,
      itemtotal: 240,
    },
    {
      imageUrl: 'assets/imgs/veg.png',
      title: 'Fish Biriyani',
      rate: 320,
      count: this.item_count,
      itemtotal: 320,
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public storage: Storage
            ) {
  }

  ionViewDidLoad() {
    this.storage.get('Orders').then((val:any)=>{
      if(val){
        this.items = val;
      }
    })
    for(var i=0;i<this.items.length;i++){
      this.total = this.total + this.items[i].itemtotal;
    }
    console.log('ionViewDidLoad CartPage');
  }

  delete(position,item,items) {
    this.items[position].itemtotal = item.rate * item.count;
    this.total = this.total - this.items[position].itemtotal;
    items.splice(position,1);

  }

  reduce(position,item,array){
    if(item.count != 1 ){
      this.items[position].count = item.count-1;
      this.items[position].itemtotal = item.rate * item.count;
      this.total = this.total - this.items[position].rate;
    }
    else{
      this.total = this.total - this.items[position].rate;
      array.splice(position,1);
    }
  }
  add(position,item,array){
    this.item_price = item.rate;
    this.items[position].count = item.count +1;
    this.items[position].itemtotal = item.rate * item.count;
    this.total = this.total + this.items[position].rate;
  }
  placeOrder(){

    for(let i=0;i<this.items.length;i++){
      this.billing.push(this.items[i])
    }
    this.storage.get("Orders").then((val:any)=>{
      if(val){
        
      }
    })
    this.storage.set("Orders",JSON.stringify(this.billing));
    // this.items.length = 0;
    // console.log("To KOT",JSON.stringify(this.items))
  }
}
