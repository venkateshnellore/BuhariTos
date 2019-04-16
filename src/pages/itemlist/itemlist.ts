import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular'; 

import {DescriptionpagePage} from '../descriptionpage/descriptionpage';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ItemlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itemlist',
  templateUrl: 'itemlist.html',
})
export class ItemlistPage {
  public soups:any=[];
   public itemlist:any=[];
   public items:any=[];
   public item_category;

   public buttonClicked: boolean = false;
  public addbutton: boolean = true;

  public item_price;
  public item_count = 0;
  public cartItems:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage, public events: Events) {
       this.itemlist = this.navParams.get("itemlist");
      //  console.log("item listsss",this.itemlist);
       this.items = this.itemlist.items;
      
       console.log("items",this.items);
       this.item_category = this.itemlist.categry_name;
       console.log("item_catagory",this.item_category);
       for (var i = 0; i < this.items.length; i++) {
        this.items[i].item_count = 0;
        this.items[i].add = this.addbutton;
        this.items[i].added = this.buttonClicked;

      }
      console.log("itemmmmssssss",this.items);
          
    }



    // ionViewWillEnter() {
     
    // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemlistPage');
    console.log("soups",this.soups);
  }

  public onButtonClick(position, items, array) {
    array[position].item_count = this.item_count + 1;
    this.storage.get('cartdata').then((val: any) => {

      if (val && val.length != 0) {
        this.cartItems = val;
        var isPresent = this.cartItems.some(function (el) { return el.food_id == items.food_id });
        if (isPresent === true) {
          console.log("Items Exists in Cart so Dont add Again");
        }
        else {
          console.log("Item Not Exists in Cart so Add it in Cart");
          this.cartItems.push(items)
          this.storage.set("cartdata", this.cartItems);
          this.events.publish('cart:updated', this.cartItems.length);
        }
      } else {
        this.cartItems = [];
        this.cartItems.push(items);
        this.storage.set("cartdata", this.cartItems);
        this.events.publish('cart:updated', this.cartItems.length);
      }
    })
    if (items.added == false) {
      items.added = !items.added;
      items.add = false;
      console.log('iffff')
    } else {
      items.add = true;
      console.log('elseeeee')
    }
  }

  navdescription(param){
    this.navCtrl.push(DescriptionpagePage,{"itemdescription":param});
  }

}
