import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemlistPage');
    // this.this.navParams.


    this.soups=[
      {id:"1",
      itemame:"Cream of tomoto soup",
      price:"95",
      spicy:"hot"},
      {id:"2",
      itemame:"Cream of tomoto soup",
      price:"95",
      spicy:"hot"},
      {id:"3",
      itemame:"Cream of tomoto soup",
      price:"95",
      spicy:"hot"},
      {id:"4",
      itemame:"Cream of tomoto soup",
      price:"95",
      spicy:"hot"},
      {id:"5 ",
      itemame:"Cream of tomoto soup",
      price:"95",
      spicy:"hot"},
    ]
    console.log("soups",this.soups);
  }

}
