import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Events } from 'ionic-angular';
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
  public tablenumber;
  public Todaysspesials:any=[];
  public today_catagory_name;


  constructor(
    public navCtrl: NavController,
    public service: BuhariServiceProvider,
    public storage: Storage,
    public events: Events) {

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
        this.Todaysspesials =this.menu[0].Today_Special;
        this.today_catagory_name = this.Todaysspesials.categry_name;
        
         for (var i = 0; i < this.bestsellers.length; i++) {
          this.bestsellers[i].item_count = 0;
          this.bestsellers[i].itemtotal = this.bestsellers[i].price;
          this.bestsellers[i].add = this.addbutton;
          this.bestsellers[i].added = this.buttonClicked;
        }
        for (var i = 0; i < this.offers.length; i++) {
          this.offers[i].item_count = 0;
          this.offers[i].itemtotal = this.offers[i].price;
          this.offers[i].add = this.addbutton;
          this.offers[i].added = this.buttonClicked;
        }

        console.log("Todaysspesialssssssssssss", JSON.stringify(this.Todaysspesials));
      }
    })



     
  }
  ionViewDidLoad() {
     



    // this.storage.get("cartdata").then((val: any) => {
    //   if (val) {
    //     this.cartdata = val;
    //   }
    // }
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
      if (val && val.length != 0) {
        this.cartItems = val;
        var isPresent = this.cartItems.some(function (el) { return el.food_id == items.food_id });
        if (isPresent === true) {
          console.log("Items Exists in Cart so Dont add Again");
        }
        else {
          console.log("Item Not Exists in Cart so Add it in Cart");
          this.cartItems.push(items)
          this.storage.set("cartdata", this.cartItems);
          this.events.publish('cart:updated', this.cartItems.length);
        }
      } else {
        this.cartItems = [];
        this.cartItems.push(items);
        this.storage.set("cartdata", this.cartItems);
        this.events.publish('cart:updated', this.cartItems.length);
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
