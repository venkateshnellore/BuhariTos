import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ItemlistPage } from '../itemlist/itemlist';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})


export class HomePage {
  @ViewChild('slider') slider: Slides;

  public foodcategory: any = [];
  public bestsellers: any = [];
  public offers: any = [];
  public menu: any = [];

  public buttonClicked: boolean = false;
  public addbutton: boolean = true;
  public item_price;
  public item_count = 0;
  public cartItems: any = [];



  constructor(
    public navCtrl: NavController, 
    public service: BuhariServiceProvider, 
    public storage: Storage) {

  }

  ionViewWillEnter() {

    // keep 1 variable in session on button click of place order in cart page
    // and check if condition here to reload this service

    this.service.menus().subscribe((resp: any) => {
      if (resp.ReturnCode == "RRS") {
        this.menu = resp.Returnvalue;
        this.foodcategory = this.menu[0].Food_Category;
        this.bestsellers = this.menu[0].Best_Sellers;
        this.offers = this.menu[0].Offers;
        for (var i = 0; i < this.bestsellers.length; i++) {
          this.bestsellers[i].item_count = 0;
          this.bestsellers[i].add = this.addbutton;
          this.bestsellers[i].added = this.buttonClicked;
        }
        for (var i = 0; i < this.offers.length; i++) {
          this.offers[i].item_count = 0;
          this.offers[i].add = this.addbutton;
          this.offers[i].added = this.buttonClicked;
        }
        console.log("OFFERRSSSSSSSSSSSSSSS",JSON.stringify(this.offers));
      }
    })
  }
  ionViewDidLoad() {
    // this.service.menus().subscribe((resp: any) => {
    //   if (resp.ReturnCode == "RRS") {
    //     this.menu = resp.Returnvalue;
    //     this.foodcategory = this.menu[0].Food_Category;
    //     this.bestsellers = this.menu[0].Best_Sellers;
    //     this.offers = this.menu[0].Offers;
    //     for (var i = 0; i < this.bestsellers.length; i++) {
    //       this.bestsellers[i].item_count = 0;
    //       this.bestsellers[i].add = this.addbutton;
    //       this.bestsellers[i].added = this.buttonClicked;
    //     }
    //     for (var i = 0; i < this.offers.length; i++) {
    //       this.offers[i].item_count = 0;
    //       this.offers[i].add = this.addbutton;
    //       this.offers[i].added = this.buttonClicked;
    //     }
    //     console.log("OFFERRSSSSSSSSSSSSSSS",JSON.stringify(this.offers));
    //   }
    // })
  }

  ngAfterViewInit() {
  }

  navitemlist(param) {
    this.navCtrl.push(ItemlistPage, { "itemlist": param });
  }

  public onButtonClick(position, items, array) {
    array[position].item_count = this.item_count + 1;
    this.storage.get('cartdata').then((val: any) => {
      if (val) {
        this.cartItems = val;
        this.cartItems.push(items)
        this.storage.set("cartdata", this.cartItems);
        console.log("Items in Cart*******************", JSON.stringify(this.cartItems));
      } else {
        this.cartItems = [];
        this.cartItems.push(items);
        this.storage.set("cartdata", this.cartItems);
      }
    })
    if (items.added == false) {
      items.added = !items.added;
      items.add = false;
      console.log('iffff')
    } else {
      items.add = true;
      console.log('elseeeee')
    }
  }
}
