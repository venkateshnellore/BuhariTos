import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{RequstpagePage} from '../requstpage/requstpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // tab1Root = ;
  // tab2Root = ;
  // tab3Root = ;
  constructor(public navCtrl: NavController) {

  }


  navrequsttab(){
    this.navCtrl.push(RequstpagePage);
  }
}
