import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ItemlistPage } from '../itemlist/itemlist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})


export class HomePage {

  public dish: any = [];
  public bestsellers: any = [];
  public itemlist: any = [];
  public soups: any[];
  @ViewChild('slider') slider: Slides;

  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: '../assets/imgs/main/background-1.jpg',
      songs: 2,
      private: false
    },
    {
      title: 'Dream\'s Adventure',
      imageUrl: '../assets/imgs/main/background-1.jpg',
      songs: 2,
      private: false
    },
    {
      title: 'Dream\'s Adventure',
      imageUrl: '../assets/imgs/main/background-1.jpg',
      songs: 2,
      private: false
    },
    {
      title: 'For the Weekend',
      imageUrl: '../assets/imgs/main/background-1.jpg',
      songs: 4,
      private: false
    },
    {
      title: 'Family Time',
      imageUrl: '../assets/imgs/main/background-1.jpg',
      songs: 5,
      private: true
    },
    {
      title: 'My Trip',
      imageUrl: '../assets/imgs/main/background-1.jpg',
      songs: 12,
      private: true
    }
  ];

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides.push(this.slides[i % 4]);
    }
  }
// constructor(public navCtrl: NavController) {
//   }

  ionViewDidLoad() {


    this.bestsellers = [
      { "id": "1", "img": "../assets/imgs/veg.png", "itemname": "Pappy Paneer", "itemtype": "veg pizza", "prize": "200" },
      { "id": "1", "img": "../assets/imgs/veg.png", "itemname": "Pappy Paneer", "itemtype": "veg pizza", "prize": "200" },
      { "id": "1", "img": "../assets/imgs/veg.png", "itemname": "Pappy Paneer", "itemtype": "veg pizza", "prize": "200" },
      { "id": "1", "img": "../assets/imgs/veg.png", "itemname": "Pappy Paneer", "itemtype": "veg pizza", "prize": "200" },
      { "id": "1", "img": "../assets/imgs/veg.png", "itemname": "Pappy Paneer", "itemtype": "veg pizza", "prize": "200" },
      { "id": "1", "img": "../assets/imgs/veg.png", "itemname": "Pappy Paneer", "itemtype": "veg pizza", "prize": "200" },
      { "id": "1", "img": "../assets/imgs/veg.png", "itemname": "Pappy Paneer", "itemtype": "veg pizza", "prize": "200" },
    ]
  }

  ngAfterViewInit() {
    this.slider.freeMode = true;
  }

  navitemlist() {
    this.navCtrl.push(ItemlistPage, { "itemlist": this.itemlist });
  }
}
