import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Events } from 'ionic-angular';
import { ItemlistPage } from '../itemlist/itemlist';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
import { Storage } from '@ionic/storage';
import {MainPage} from  '../main/main';
import { Observable } from '../../../node_modules/rxjs';
import {DescriptionpagePage} from '../descriptionpage/descriptionpage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})


export class HomePage {
  @ViewChild('slider') slider: Slides;

  //Main Array
  public foodcategory: any = [];
  public bestsellers: any = [];
  public offers: any = [];
  public menu: any = [];
  public todayspecial:any=[];
  public foodcategoryitems:any;

  //dummy flag
  public buttonClicked: boolean = false;
  public addbutton: boolean = true;
  public item_price;
  public item_count = 0;

  public cartItems: any = [];
  public today_catagory_name;
  
  //filter
  searchTerm: any = "";
  public showdefault:any = 'flex';//showspecialist
  public showfilter:any='none';//showclinicanddoctors
  public mainmenufilter:any=[];
  public bestsellersfilter:any;
  public offersfilter:any;
  public todayspecialfilter:any;

  public subscription;

  constructor(
    public navCtrl: NavController,
    public service: BuhariServiceProvider,
    public storage: Storage,
    public events: Events
  ) {

  }

  ionViewWillEnter() {
    this.serviceForMenu();
    this.MainmenuLoop();
    // keep 1 variable in session on button click of place order in cart page
    // and check if condition here to reload this service
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
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  MainmenuLoop() {
    this.subscription = Observable.interval(180000).subscribe(x => {
      this.serviceForMenu();
    });
  }

  public serviceForMenu(){
    
  this.service.menus().subscribe((resp: any) => {
    if (resp.ReturnCode == "RRS") {
      this.menu = resp.Returnvalue;
      this.foodcategory = this.menu[0].Food_Category;
      this.foodcategoryitems = this.menu[0].Food_Category;
      this.bestsellers = this.menu[0].Best_Sellers;
      this.offers = this.menu[0].Offers;
      this.todayspecial =this.menu[0].Today_Special;
      this.today_catagory_name = this.todayspecial.categry_name;
      this.todayspecialfilter = this.todayspecial.items;
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
      for (var i = 0; i < this.todayspecial.length; i++) {
        this.todayspecial[i].item_count = 0;
        this.todayspecial[i].itemtotal = this.todayspecial[i].price;
        this.todayspecial[i].add = this.addbutton;
        this.todayspecial[i].added = this.buttonClicked;
      }
      for(var i=0;i<this.foodcategoryitems.length;i++){
        for(var j=0;j<this.foodcategoryitems[i].items.length;j++){
          this.foodcategoryitems[i].items[j].item_count = 0;
          this.foodcategoryitems[i].items[j].itemtotal = this.foodcategoryitems[i].items[j].price;
          this.foodcategoryitems[i].items[j].add = this.addbutton;
          this.foodcategoryitems[i].items[j].added = this.buttonClicked;
        }
      }
      console.log("main food categories*********", JSON.stringify(this.foodcategory));
    }
  })
}
  

  search(searchTerm) {
    console.log("testtttt",searchTerm.length)
    if (searchTerm == "" || searchTerm === undefined || searchTerm.length == 0) {

      this.showdefault = 'flex';
      this.foodcategory=[];
      this.showfilter = 'none';
    }
    else {
      this.showfilter= 'block';
      this.showdefault = 'none';
      // this.foodcategoryitems = this.foodcategory.items;
      console.log()
      for(var i=0;i<this.foodcategoryitems.length;i++){
        for(var j=0;j<this.foodcategoryitems[i].items.length;j++){
          this.mainmenufilter.push(this.foodcategoryitems[i].items[j]);
        }
      }
      console.log("test cat",this.mainmenufilter)
      this.todayspecialfilter = this.todayspecial.filter((items) => {
        return items.food_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
      this.bestsellersfilter = this.bestsellers.filter((items)=>{
        return items.food_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
      this.offersfilter = this.offers.filter((items)=>{
        return items.food_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
      this.mainmenufilter = this.mainmenufilter.filter((items)=>{
        return items.food_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      })
      if(this.bestsellersfilter.length == 0){
        
      }
    }
    console.log("MAIN DISHES FILTERED************", this.foodcategoryitems);
    console.log("BEST SELLERS FILTERED************", this.bestsellersfilter);
    console.log("OFFERS FILTERED************", this.offersfilter);
    // console.log("MIXED FILTERED************", this.mixedfilter);
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
  
  navdescription(param){
    this.navCtrl.push(DescriptionpagePage,{"itemdescription":param});
  }
}
