import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {BuhariServiceProvider} from '../../providers/buhari-service/buhari-service';
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
    
  public menu:any=[];
  public todayspecials:any=[];
  public items:any=[];
  public item_image:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:BuhariServiceProvider) {
  }
  ionViewWillEnter() {
    this.service.menus().subscribe((resp: any) => {
      if (resp.ReturnCode == "RRS") {
        this.menu = resp.Returnvalue;
        this.todayspecials =this.menu[0].Today_Special;
        this.items  = this.todayspecials.items;
        // this.item_image = this.items.item_image;/
        console.log("toda*****************",JSON.stringify(this.items));
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  navigate(){
    this.navCtrl.push(TabsPage);
  }
}
