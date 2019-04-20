import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  public backgrounds:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:BuhariServiceProvider) {
  }
  ionViewWillEnter() {
    this.service.menus().subscribe((resp: any) => {
      if (resp.ReturnCode == "RRS") {
        this.backgrounds  = resp.Returnvalue[0].Today_Special.items;
        // this.item_image = this.items.item_image;/
        console.log("toda*****************",JSON.stringify(this.backgrounds));
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
