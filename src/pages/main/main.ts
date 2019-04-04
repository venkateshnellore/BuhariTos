import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  backgrounds = [
    'assets/imgs/main/background-1.jpg',
    'assets/imgs/main/background-2.jpg',
    'assets/imgs/main/background-3.jpg',
    'assets/imgs/main/background-4.jpg',
    'assets/imgs/main/background-5.jpg'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  navigate(){
    this.navCtrl.push(TabsPage);
  }
}
