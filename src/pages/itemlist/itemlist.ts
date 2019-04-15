import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 

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
  public cartItemsss:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
       this.itemlist = this.navParams.get("itemlist");
      //  console.log("item listsss",this.itemlist);
       this.items = this.itemlist.item;
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
      if (val) {
        this.cartItemsss = val;
        this.cartItemsss.push(items)
        this.storage.set("cartdata", this.cartItemsss);
        console.log("Items in Cart*******************", JSON.stringify(this.cartItemsss));
      } else {
        this.cartItemsss = [];
        this.cartItemsss.push(items);
        this.storage.set("cartdata", this.cartItemsss);
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
