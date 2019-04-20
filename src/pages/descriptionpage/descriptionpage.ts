import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DescriptionpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descriptionpage',
  templateUrl: 'descriptionpage.html',
})
export class DescriptionpagePage {
  

   public itemdescription:any=[];
   public item_description;
   public item_name;
   public item_images:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.itemdescription = this.navParams.get("itemdescription");
      console.log("itemdescriptionnnn",this.itemdescription);
  }

  ionViewDidLoad() {
    this.item_description = this.itemdescription.food_description;
    this.item_name = this.itemdescription.food_name;
    this.item_images = this.itemdescription.item_images;
    console.log('ionViewDidLoad DescriptionpagePage');
    console.log("Item Description",this.itemdescription);
  }

}
