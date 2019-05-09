import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavController, Slides, Events, ToastController } from 'ionic-angular';
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
  @ViewChild('myContent') header: number;
  newHeaderHeight:any;

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
  public todayspecialdummy:any=[];
  public foodcategoryfilter:any;
  public bestsellersfilter:any;
  public offersfilter:any;
  public todayspecialfilter:any;


  //show and hide
  public showbestsellerslabel:boolean=true;
  public showofferslabel:boolean = true;
  public showtodayspeciallabel:boolean = true;
  public showfoodcategorylabel:boolean = true;
  public showempty:boolean = false;

  public subscription;

  constructor(
    public navCtrl: NavController,
    public service: BuhariServiceProvider,
    public storage: Storage,
    public element: ElementRef,
    public events: Events,
    public toast: ToastController,
    public renderer: Renderer
  ) {

  }

  ionViewWillEnter() {
    this.serviceForMenu();
    this.MainmenuLoop();
  }

  ionViewDidLoad() {
  }

  ionViewDidLeave(){
    this.searchTerm="";
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  MainmenuLoop() {
    this.subscription = Observable.interval(10000).subscribe(x => {
      this.serviceForMenu();
    });
  }

  public serviceForMenu(){
  this.menu=[];  
  this.service.menus().subscribe((resp: any) => {
    if (resp.ReturnCode == "RRS") {
      this.menu = resp.Returnvalue;
      console.log(JSON.stringify("menu",this.menu));
      this.foodcategory = this.menu[0].Food_Category;
      this.foodcategoryitems = this.menu[0].Food_Category;
      this.bestsellers = this.menu[0].Best_Sellers;
      this.offers = this.menu[0].Offers;
      this.todayspecial =this.menu[0].Today_Special;
      this.today_catagory_name = this.todayspecial.categry_name;
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
        this.todayspecialdummy.push(this.todayspecial[i]);
      }
      for(var i=0;i<this.foodcategoryitems.length;i++){
        for(var j=0;j<this.foodcategoryitems[i].items.length;j++){
          this.foodcategoryitems[i].items[j].item_count = 0;
          this.foodcategoryitems[i].items[j].itemtotal = this.foodcategoryitems[i].items[j].price;
          this.foodcategoryitems[i].items[j].add = this.addbutton;
          this.foodcategoryitems[i].items[j].added = this.buttonClicked;
        }
      }
    }
  })
}
  

  search(searchTerm) {
    this.mainmenufilter=[];
    this.todayspecialfilter = this.todayspecial.items;
    if (searchTerm == "" || searchTerm === undefined || searchTerm.length == 0) {
      this.showdefault = 'flex';
      this.showfilter = 'none';
    }
    else {
      this.showempty = false;
      this.showfilter= 'block';
      this.showdefault = 'none';
      for(var i=0;i<this.foodcategoryitems.length;i++){
        for(var j=0;j<this.foodcategoryitems[i].items.length;j++){
          this.mainmenufilter.push(this.foodcategoryitems[i].items[j]);
        }
      }
      this.todayspecialfilter = this.todayspecialdummy.filter((items) => {
        return items.food_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
      this.bestsellersfilter = this.bestsellers.filter((items)=>{
        return items.food_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
      this.offersfilter = this.offers.filter((items)=>{
        return items.food_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });
      this.foodcategoryfilter = this.mainmenufilter.filter((items)=>{
        return items.food_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      })
      console.log("FOOD CATEGORY FILTER*********",this.foodcategoryfilter.length)
      console.log("BEST SELLERS FILTER*********",this.bestsellersfilter.length)
      console.log("OFFERS FILTER*********",this.offersfilter.length)
      console.log("TODAY'S FILTER*********",this.todayspecialfilter.length)
      if(this.foodcategoryfilter.length && this.offersfilter.length &&
        this.todayspecialfilter.length && this.bestsellersfilter.length == 0){
          this.showempty = true;
        }else{
          this.showempty = false;
        }
      if(this.bestsellersfilter.length == 0){
        this.showbestsellerslabel = false;
      }else{
        this.showbestsellerslabel = true;
      }
      if(this.offersfilter.length == 0){
        this.showofferslabel = false;
      }else{
        this.showofferslabel = true;
      }
      if(this.todayspecialfilter.length == 0){
        this.showtodayspeciallabel = false;
      }else{
        this.showtodayspeciallabel = true;
      }
      if(this.foodcategoryfilter.length == 0){
        this.showfoodcategorylabel = false;
      }else{
        this.showfoodcategorylabel = true;
      }
    }
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
          this.showtoast("This Item Already Exists in Cart");
        }
        else {
          this.cartItems.push(items)
          this.storage.set("cartdata", this.cartItems);
          // this.showtoast("Item has been Added to Cart");
          this.events.publish('cart:updated', this.cartItems.length);
        }
      } else {
        this.cartItems = [];
        this.cartItems.push(items);
        this.storage.set("cartdata", this.cartItems);
        // this.showtoast("Item has been Added to Cart");
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

  showtoast(message){
    const toast = this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();   
  }
}
