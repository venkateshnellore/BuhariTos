import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 

import {DescriptionpagePage} from '../descriptionpage/descriptionpage';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
       this.itemlist = this.navParams.get("itemlist");
       console.log("item listsss",this.itemlist);
       this.items = this.itemlist.items;
       console.log("items",this.items);
       this.item_category = this.itemlist.category;
       console.log("item_catagory",this.item_category);

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemlistPage');
    // this.this.navParams.


    console.log("soups",this.soups);
  }

  navdescription(soups){
    this.navCtrl.push(DescriptionpagePage,{"itemdescription":soups});
  }

}
