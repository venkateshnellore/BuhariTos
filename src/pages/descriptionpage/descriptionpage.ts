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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.itemdescription = this.navParams.get("itemdescription");
      console.log("itemdescription",this.itemdescription);
      this.item_description = this.itemdescription.item_description;
      this.item_name = this.itemdescription.item_name;
      console.log("itemdescription",this.item_description);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionpagePage');
  }

}
