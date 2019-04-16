import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BillingdetailsPage } from '../billingdetails/billingdetails';

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
  public order: any;
  public removefromcart: any = [];
  public item_price: any;
  public billing: any = [];
  public cartdata: any = [];
  public cartdataitems: any = [];
  public tablenumber;
  items = [
    // {
    //   imageUrl: 'assets/imgs/veg.png',
    //   title: 'Chicken Fried Rice',
    //   rate: 140,
    //   count: this.item_count,
    //   itemtotal: 140,
    // },
    // {
    //   imageUrl: 'assets/imgs/veg.png',
    //   title: 'Mutton Biriyani',
    //   rate: 240,
    //   count: this.item_count,
    //   itemtotal: 240,
    // },
    // {
    //   imageUrl: 'assets/imgs/veg.png',
    //   title: 'Fish Biriyani',
    //   rate: 320,
    //   count: this.item_count,
    //   itemtotal: 320,
    // },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage
  ) {
    this.storage.get("cartdata").then((val: any) => {
      if (val) {
        this.cartdata = val;
        for (var i = 0; i < this.cartdata.length; i++) {
          this.cartdata[i].itemtotal = this.cartdata[i].price;
          this.total = this.total + this.cartdata[i].itemtotal;
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  ionViewWillEnter() {
    this.total = 0;
    //loading this data each time when the screen enters
    this.storage.get("cartdata").then((val: any) => {
      if (val) {
        this.cartdata = val;
        for (var i = 0; i < this.cartdata.length; i++) {
          this.cartdata[i].itemtotal = this.cartdata[i].price;
          this.total = this.total + this.cartdata[i].itemtotal;
        }
      }
    });  

    

    this.storage.get("tablenumber").then((val: any) =>{
      if(val){
        this.tablenumber = val;
        console.log("tablenumber",this.tablenumber);
      }
    });
  }

  ionViewWillLeave(){
    //setting the increased count for the items while leaving the cart
    this.storage.set('cartdata',this.cartdata);
  }

  delete(position, item, items) {
    this.cartdata[position].itemtotal = item.price * item.item_count;
    this.total = this.total - this.cartdata[position].itemtotal;
    items.splice(position, 1);

  }

  reduce(position, item, array) {
    if (item.item_count != 1) {
      array[position].item_count = item.item_count - 1;
      array[position].itemtotal = item.price * item.item_count;
      this.total = this.total - array[position].price;
    }
    else {
      this.total = this.total - array[position].price;
      array.splice(position, 1);
    }
  }
  add(position, item, array) {
    this.item_price = item.rate;
    array[position].item_count = item.item_count + 1;
    array[position].itemtotal = item.price * item.item_count;
    // alert(itemtotal);
    this.total = this.total + array[position].price;
  }

  placeOrder() {

    for (let i = 0; i < this.cartdata.length; i++) {
      this.billing.push(this.cartdata[i])
    }
    this.storage.get("Orders").then((val: any) => {
      if (val) {

      }
    })
    this.storage.set("Orders", JSON.stringify(this.cartdata));
    // this.items.length = 0;
    // console.log("To KOT",JSON.stringify(this.items))
  }

  navbillingdetails() {
    this.navCtrl.push(BillingdetailsPage);
  }
}
