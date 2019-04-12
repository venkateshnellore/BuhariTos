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
      //  console.log("item listsss",this.itemlist);
       this.items = this.itemlist.item;
       console.log("items",this.items);
       this.item_category = this.itemlist.categry_name;
       console.log("item_catagory",this.item_category);

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemlistPage');
    console.log("soups",this.soups);
  }

  navdescription(param){
    this.navCtrl.push(DescriptionpagePage,{"itemdescription":param});
  }

}
