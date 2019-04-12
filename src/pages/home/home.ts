import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ItemlistPage } from '../itemlist/itemlist';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';

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

  constructor(public navCtrl: NavController,public service: BuhariServiceProvider) {
   
  }
  
  ionViewDidLoad() {
    this.service.menus().subscribe((resp:any)=>{
      if(resp.ReturnCode == "RRS"){
        this.menu = resp.Returnvalue;
        this.foodcategory = this.menu[0].Food_Category;
        this.bestsellers = this.menu[0].Best_Sellers;
        this.offers = this.menu[0].Offers;
        console.log("Food Category----",JSON.stringify(this.offers));
      }
    })
  }

  ngAfterViewInit() {
  }

  navitemlist(param) {
    this.navCtrl.push(ItemlistPage,{"itemlist":param});
  }

}
