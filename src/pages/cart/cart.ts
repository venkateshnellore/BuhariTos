import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BillingdetailsPage } from '../billingdetails/billingdetails';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public item_count = 1;
  public total = 0;
  // public tax = 30;
  // public ordercount = 0;
  // public order: any;
  public removefromcart: any = [];
  public item_price: any;
  public billing: any = [];
  public cartdata: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toast: ToastController,
    public storage: Storage,
    public service: BuhariServiceProvider
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
        alert("cartdata is there");
        for (var i = 0; i < this.cartdata.length; i++) {
          this.cartdata[i].itemtotal = this.cartdata[i].price;
          this.total = this.total + this.cartdata[i].itemtotal;
        }
      }
      else{
        alert("there is no cartdata array exists");
      }
    });  
  }

  ionViewWillLeave(){
    this.total = 0;
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
    this.total = this.total + array[position].price;
  }

  placeOrder() {
    for (let i = 0; i < this.cartdata.length; i++) {
      let items={
        "food_id":this.cartdata[i].food_id,
        "quantity":this.cartdata[i].item_count,
        "order_status_id":5
      }
      this.billing.push(items)
    }
    this.service.placeOrder(this.billing,"").subscribe((resp:any)=>{
      if(resp.ReturnCode == "RIS"){
        this.showtoast("Your order will be delivered shortly");
        this.cartdata = [];
        this.total = 0;
        this.storage.clear();
      }
      else{
        this.showtoast("There is problem in placing order");
      }
    })
    console.log("To KOT",JSON.stringify(this.billing))
  }

  navbillingdetails() {
    this.navCtrl.push(BillingdetailsPage);
  }

  showtoast(message){
    const toast = this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();   
  }
}
