import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{RequstpagePage} from '../requstpage/requstpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  navrequsttab(){
    this.navCtrl.push(RequstpagePage);
  }
}
