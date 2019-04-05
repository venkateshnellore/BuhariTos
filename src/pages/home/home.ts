import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ItemlistPage} from '../itemlist/itemlist';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class HomePage {

public dish:any=[];
public bestsellers:any=[];
public itemlist:any=[];
public soups:any[];
<<<<<<< HEAD

  constructor(public navCtrl: NavController) {
=======
>>>>>>> cde977bc636522f85c9250a4c8af2291177c1b0b

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
     
    

    this.itemlist=[
      { 
      vegsoups:[
        {"id":"1","soup":"Cream of Tomato Soup","price":"85"},
        {"id":"2","soup":"Cream of mushroom soup","price":"85"},
        {"id":"3","soup":"veg Sweet Corn Soup","price":"85"},
        {"id":"4","soup":"Veg Clear Soup","price":"85"},
        {"id":"5","soup":"Veg Hot N Sour Soup","price":"85"}, 
      ],
      Nonvegsoups:[
        {"id":"1","soup":"Cream of Chicken Soup","price":"95"},
        {"id":"2","soup":"Chicken Hot N Sour Soup","price":"95"},
        {"id":"3","soup":"Chicken clear Soup","price":"95"},
        {"id":"4","soup":"Chicken Sweet Corn Soup","price":"95"},
        {"id":"5","soup":"Chicken Sweet Corn Soup","price":"95"},
        // {"id":"6","soup":"Chicken Hot N Sour Soup","price":"95"},
        // {"id":"7","soup":"Chicken Hot N Sour Soup","price":"95"},

      ]
      


      } 
      
    ]
    console.log("itemlist",JSON.stringify(this.itemlist));
    console.log("dishes",this.dish);
  }


  navrequsttab(){
    // this.navCtrl.push(RequstpagePage);
  }
  navitemlist(){
   this.navCtrl.push(ItemlistPage,{"itemlist":this.itemlist});
  }
}
