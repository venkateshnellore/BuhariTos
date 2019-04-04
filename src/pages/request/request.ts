import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {

  public request_items = [
    { val: 'Tissue', isChecked: false },
    { val: 'Finger Bowl', isChecked: false },
    { val: 'Sambar', isChecked: false },
    { val: 'Raitha', isChecked: false },
    { val: 'Chutney', isChecked: false },
    { val: 'Extra Plate', isChecked: false },
    { val: 'Extra Spoon', isChecked: false }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

  requestitem(default_req_item,custom_req_item){
    console.log(default_req_item,custom_req_item);
  }
}
