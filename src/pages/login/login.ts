import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
import { Storage } from '@ionic/storage';
// import { SessionStorageService } from 'ngx-webstorage';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: any;
  public table:any ={
  };
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toast: ToastController,
    public storage: Storage,
    // public session: SessionStorageService,
    public service: BuhariServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(table) {
    if(table.number && table.password == "" || table.number && table.password === undefined ){
      this.showtoast("Please Enter Valid Table Number and Password");
    }else{
       this.service.login(table).subscribe((resp:any)=>{
        if(resp.ReturnCode == "LS"){

          this.showtoast("Login Successful");
          this.storage.set("tablenumber",table.number);
          // this.session.store("tablenumber",table.number);
          this.navCtrl.push(MainPage);
        }
        else{
          this.showtoast(resp.Return);
        }
      })
    }
  }

  showtoast(message){
    const toast = this.toast.create({
      message: message,
      duration: 3000
    });
    toast.present();   
  }
}
