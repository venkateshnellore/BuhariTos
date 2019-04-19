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

  public backgrounds:any = [
    // {"image":'assets/imgs/main/background-1.jpg'},
    // {"image":'assets/imgs/main/background-2.jpg'},
    // {"image":'assets/imgs/main/background-3.jpg'},
    // {"image":'assets/imgs/main/background-4.jpg'},
    // {"image":'assets/imgs/main/background-5.jpg'},
  ];
  public foodcategory:any=[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service: BuhariServiceProvider) {

    this.service.menus().subscribe((resp:any)=>{
      if (resp.ReturnCode == "RRS") {
        this.backgrounds = resp.Returnvalue[0].Today_Special.items;
        console.log("BACKGROUND IMAGES*******",JSON.stringify(this.backgrounds));
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
