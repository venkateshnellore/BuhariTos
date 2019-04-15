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

  public foodcategory:any=[];  
  public bestsellers: any=[];
  public offers: any = [];
  public menu:any = [];
  public dummyarry:any=[];
  public dummyobj:any={"count":0};
  public buttonClicked:boolean = false;
  public addbutton:boolean = true;

   public offersbutton:boolean = false;
   public offersaddbutton:boolean = true;

    public item_price;
    public currentNumber = 0;
    public total:any;
    // public count = 1;
    public price;

  public item_count = 0;

  public cart:any=[];



  constructor(public navCtrl: NavController,public service: BuhariServiceProvider,public storage: Storage) {
   
  }
  
  ionViewWillEnter(){

    // keep 1 variable in session on button click of place order in cart page
    // and check if condition here to reload this service

    this.service.menus().subscribe((resp:any)=>{
      if(resp.ReturnCode == "RRS"){
        this.menu = resp.Returnvalue;
        this.foodcategory = this.menu[0].Food_Category;
        this.bestsellers = this.menu[0].Best_Sellers;
        this.offers = this.menu[0].Offers;
        for(var i=0;i<this.bestsellers.length;i++){
          this.bestsellers[i].item_count =0;
          this.bestsellers[i].add = this.addbutton;
          this.bestsellers[i].added = this.buttonClicked;
        }
      }
    }) 
  }
  ionViewDidLoad() {
    this.service.menus().subscribe((resp:any)=>{
      if(resp.ReturnCode == "RRS"){
        this.menu = resp.Returnvalue;
        this.foodcategory = this.menu[0].Food_Category;
        this.bestsellers = this.menu[0].Best_Sellers;
        this.offers = this.menu[0].Offers;
        // this.dummyarry.length = this.bestsellers.length;
        for(var i=0;i<this.bestsellers.length;i++){
          this.bestsellers[i].item_count =0;
          this.bestsellers[i].add = this.addbutton;
          this.bestsellers[i].added = this.buttonClicked;
          // let dummyobj = {
          //   "food_id":this.bestsellers[i].food_id,
          //   "count":this.item_count,
          //   "food_price":this.bestsellers[i].price,
          //   "food_type":this.bestsellers[i].food_type,
          //   "quantity":this.bestsellers[i].quantity,
          //   "food_total":this.bestsellers[i].price * this.item_count,
          //   "food_name":this.bestsellers[i].food_name
          // }
          // this.dummyarry.push(dummyobj);
        }
        console.log("Food bestsellersssssssssss----",JSON.stringify(this.dummyobj));
      }
    })
  }

  ngAfterViewInit() {
  }

  navitemlist(param) {
    this.navCtrl.push(ItemlistPage,{"itemlist":param});
  }
  public onButtonClick(position,items,array) {
    this.bestsellers[position].item_count = this.item_count +1;
    // this.bestsellers[position].itemcount = this.item_count;
    // this.bestsellers[position].bestsellers =items;
    // this.bestsellers[position].bestsellers =items.food_id;
    // var food_id = this.bestsellers[position].bestsellers 
    // this.bestsellers[position].bestsellers= items.food_name;
    // var food_name = this.bestsellers[position].bestsellers;
    // this.bestsellers[position].bestsellers = items.price
    // var item_price = this.bestsellers[position].bestsellers
    // console.log("food_id",food_id);
    // console.log("food_id",food_name);
    // console.log("food_id",item_price);
    console.log("ITEMS************",items);
    // this.cart.set("cartdata",food_id,item_price,food_name);
    this.storage.set("cartdata",items);
    // console.log("ADDED AN ITEM***************",JSON.stringify(items.item_count));

    if(items.added == false){
      items.added = !items.added;
      items.add = false;
      console.log('iffff')
    }else{
      items.add = true;
      console.log('elseeeee')
    }
    
}

    offerbuttonclicked(){
   
      this.offersbutton = !this.offersbutton;
      this.offersaddbutton = false;
  }
  
  // add(position,item,array){
  //   this.dummyarry[position].count = this.dummyarry[position].count +1;
  //   console.log("ADD BUTTON*********",JSON.stringify(this.dummyarry));
  // }

  reduce(position,item,array){
    if(item.count != -1 ){
      this.bestsellers[position].item_count = item.item_count -1;
      console.log('counttttttttttt',this.bestsellers[position].item_count)
      if(this.bestsellers[position].item_count == 0){
        this.addbutton = true;
        this.buttonClicked = !this.buttonClicked;
        console.log('ifffff')
      }
      //this.addbutton = true;
      //console.log('ifffff')
      //this.buttonClicked = !this.buttonClicked
        console.log('else ifffff')
    }
  }
  add(position,item,items){
    // this.item_price = item.rate;

    // this.bestsellers[position].item_count = item.item_count +1;
    // var count_item = this.bestsellers[position].item_count
    // this.bestsellers[position].bestsellers = item.price * item.item_count;
    // var item_price = this.bestsellers[position].bestsellers
    // this.bestsellers[position].bestsellers =item.food_id;
    // var food_id = this.bestsellers[position].bestsellers 
    // this.bestsellers[position].bestsellers= item.food_name;
    // var food_name = this.bestsellers[position].bestsellers;
    // console.log("adding to cart***************",this.bestsellers);
    // console.log("food_iddddddd",food_name);
    //   console.log("food_iddddddd",food_id);
    //   console.log('best sellersssssssss',item_price)
    //   console.log("item count",count_item);
      // this.cart.push(food_id,item_price,count_item,food_name)
      // console.log('arrayyyy',JSON.stringify(this.cart))

      // this.storage.set("cartdata",this.cart);
      // console.log("cartttttt",this.storage.set("cartdata",this.cart));
    
  }


}
