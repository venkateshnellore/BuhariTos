import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, Events} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BillingdetailsPage } from '../billingdetails/billingdetails';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public empty_cart:boolean=false;
  public not_empty_cart:boolean=false;
  public item_count = 1;
  public total = 0;
  public removefromcart: any = [];
  public item_price: any;
  public billing: any = [];
  public cartdata: any = [];
  public showoffer:boolean = false;
  public showplaceorderbtn:boolean = true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage,
    public toast: ToastController,
    public service:BuhariServiceProvider,
    public events: Events
  ) {
    this.storage.get("cartdata").then((val: any) => {
      if (val) {
        this.cartdata = val;
        if(this.cartdata.length == 0){
          this.empty_cart = true;
          this.not_empty_cart = false;
        }
        else{
          this.empty_cart = false;
          this.not_empty_cart = true;
        }
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
    this.showplaceorderbtn = true;
    this.storage.get("cartdata").then((val: any) => {
      if (val) {
        this.cartdata = val;
        if(this.cartdata.length == 0){
          this.empty_cart = true;
          this.not_empty_cart = false;
        }
        else{
          this.empty_cart = false;
          this.not_empty_cart = true;
        }
        for (var i = 0; i < this.cartdata.length; i++) {
          this.cartdata[i].itemtotal = this.cartdata[i].price * this.cartdata[i].item_count;
          this.total = this.total + this.cartdata[i].itemtotal;
        }
      }
      else{
        this.empty_cart = true;
        this.not_empty_cart = false;
      }
    });  
  }

  ionViewWillLeave(){
    this.total = 0;
    this.storage.set('cartdata',this.cartdata);
  }

  delete(position, item, items) {
    this.cartdata[position].itemtotal = item.price * item.item_count;
    this.total = this.total - this.cartdata[position].itemtotal;
    items.splice(position, 1);
    // this.showtoast("The Item"+this.cartdata[position].food_name+"has been removed from cart");
    this.events.publish('cart:updated', this.cartdata.length);
    if(this.cartdata.length == 0){
      this.empty_cart = true;
      this.not_empty_cart = false;
    }
    else{
      this.empty_cart = false;
      this.not_empty_cart = true;
    }
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
      this.events.publish('cart:updated', this.cartdata.length);
      if(this.cartdata.length == 0){
        this.empty_cart = true;
        this.not_empty_cart = false;
      }
      else{
        this.empty_cart = false;
        this.not_empty_cart = true;
      }
    }
  }
  add(position, item, array) {
    this.item_price = item.rate;
    array[position].item_count = item.item_count + 1;
    array[position].itemtotal = item.price * item.item_count;
    this.total = this.total + array[position].price;
  }

  placeOrder() {
    this.billing=[];
    if(this.cartdata.length !=0){
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
          this.showplaceorderbtn = false;
          this.cartdata = [];
          if(this.cartdata.length == 0){
            this.empty_cart = true;
            this.not_empty_cart = false;
            }
            else{
            this.empty_cart = false;
            this.not_empty_cart = true;
            }
          this.total = 0;
          this.storage.clear();
          this.events.publish('cart:updated', this.cartdata.length);
          this.showtoast("Your order will be delivered shortly");
        }
        else if(resp.ReturnCode == "CNPO"){
            this.showtoast("Sorry Billing has not been cleared");
        }
        else{
          console.log("There is problem in placing order");
        }
      })
    }
    else{
      this.showtoast("There is no Items in Cart please add some items");
    }
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
