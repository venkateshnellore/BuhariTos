import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public dish:any=[];
public bestsellers:any=[];
  constructor(public navCtrl: NavController) {

  }


  ionViewDidLoad() {

    this.dish=[
      {"id":"1","img":"../assets/imgs/img1.jpg","dishtitle":"North indian","paces":"10 palces"},
      {"id":"1","img":"../assets/imgs/img1.jpg","dishtitle":"biryani","paces":"20 places"},
      {"id":"1","img":"../assets/imgs/img1.jpg","dishtitle":"fish curry","paces":"30 places"},
      {"id":"1","img":"../assets/imgs/img1.jpg","dishtitle":"kerala","paces":"40 places"},
      {"id":"1","img":"../assets/imgs/img1.jpg","dishtitle":"North indian","paces":"30 places"}
    ]

    this.bestsellers=[
      {"id":"1","img":"../assets/imgs/veg.png","itemname":"Pappy Paneer","itemtype":"veg pizza","prize":"200"},
      {"id":"1","img":"../assets/imgs/veg.png","itemname":"Pappy Paneer","itemtype":"veg pizza","prize":"200"},
      {"id":"1","img":"../assets/imgs/veg.png","itemname":"Pappy Paneer","itemtype":"veg pizza","prize":"200"},
      {"id":"1","img":"../assets/imgs/veg.png","itemname":"Pappy Paneer","itemtype":"veg pizza","prize":"200"},
      {"id":"1","img":"../assets/imgs/veg.png","itemname":"Pappy Paneer","itemtype":"veg pizza","prize":"200"},
      {"id":"1","img":"../assets/imgs/veg.png","itemname":"Pappy Paneer","itemtype":"veg pizza","prize":"200"},
      {"id":"1","img":"../assets/imgs/veg.png","itemname":"Pappy Paneer","itemtype":"veg pizza","prize":"200"},

    ]
    console.log("dishes",this.dish);
  }

  navrequsttab(){
    // this.navCtrl.push(RequstpagePage);
  }
}
