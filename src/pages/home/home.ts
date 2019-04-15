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
  public dummyarry: any = [];
  public dummyobj: any = { "count": 0 };
  public buttonClicked: boolean = false;
  public addbutton: boolean = true;

  public offersbutton: boolean = false;
  public offersaddbutton: boolean = true;

  public item_price;
  public currentNumber = 0;
  public total: any;
  // public count = 1;
  public price;

  public item_count = 0;

  public cart: any = [];



  constructor(public navCtrl: NavController, public service: BuhariServiceProvider, public storage: Storage) {

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
      }
    })
  }
  ionViewDidLoad() {
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
        console.log("Food bestsellersssssssssss----", JSON.stringify(this.dummyobj));
      }
    })
  }

  ngAfterViewInit() {
  }

  navitemlist(param) {
    this.navCtrl.push(ItemlistPage, { "itemlist": param });
  }
  public onButtonClick(position, items, array) {
    this.bestsellers[position].item_count = this.item_count + 1;
    console.log("ITEMS************", items);
    this.storage.set("cartdata", items);
    if (items.added == false) {
      items.added = !items.added;
      items.add = false;
      console.log('iffff')
    } else {
      items.add = true;
      console.log('elseeeee')
    }
  }

  offerbuttonclicked() {
    this.offersbutton = !this.offersbutton;
    this.offersaddbutton = false;
  }

}
