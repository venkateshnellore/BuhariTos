import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SessionStorageService } from 'ngx-webstorage';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
import { Http } from '@angular/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public hoteldetails:any={};
  qrcode = "https://tableorderingsystem-c0b92.firebaseapp.com/?business=buhady145&table=2&password=123";


  constructor(public navCtrl: NavController,
    public session: SessionStorageService,
    public service: BuhariServiceProvider,
    public http: Http) {
    this.hoteldetails = this.session.retrieve("hoteldetails");
    
    this.http.get(this.hoteldetails.restaurant_info)
    .subscribe(data =>{
      this.hoteldetails.restaurant_info = data.text();
    })
  }

}
