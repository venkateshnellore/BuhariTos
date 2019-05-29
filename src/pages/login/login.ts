import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, MenuController, Events } from 'ionic-angular';
import { MainPage } from '../main/main';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
import { Storage } from '@ionic/storage';
import { SessionStorageService } from 'ngx-webstorage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: any;
  public table:any ={};
  public branchdetails:any=[];
  public branch_id;

  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toast: ToastController,
    public storage: Storage,
    public session: SessionStorageService,
    public alertCtrl: AlertController,
    public service: BuhariServiceProvider,
    public menu: MenuController,
    public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter(){
    this.menu.enable(false);
  }

  ionViewDidLeave(){
    this.menu.enable(true);
  }

  login(table) {
    if(table.number && table.password && table.businessid == "" || table.number && table.password && table.businessid === undefined ){
      this.showtoast("Please Enter Valid Table Number and Password");
    }else{
       this.service.login(table).subscribe((resp:any)=>{
        if(resp.ReturnCode == "LS"){
          this.branchdetails = resp.branch_details;
          // this.branchdetails = this.branchdetails[0].branchdetails;
          this.session.store("hoteldetails",this.branchdetails[0]);
          this.showtoast("Login Successful");
          console.log(resp,"Login Successful")
          this.session.store("logindetails",table);
          this.session.store("tablenumber",table.number);
          this.session.store("businessid",table.businessid);
          console.log("tablenummm",table.number)
          console.log("businessid",table.businessid)
          this.events.publish('user:logout');
          // console.log("bisinessidddd", this.session.store("businessid",table.branch_id));
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
