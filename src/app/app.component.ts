import { Component,ViewChild, } from '@angular/core';
import { Platform,ToastController, MenuController, NavController, Events, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BuhariServiceProvider } from '../providers/buhari-service/buhari-service';
import { SessionStorageService } from 'ngx-webstorage';
import { Storage } from '@ionic/storage'


import { TabsPage } from '../pages/tabs/tabs';
import { LogoutPage } from '../pages/logout/logout';
import { FeedbackPage } from '../pages/feedback/feedback';
import { MainPage } from '../pages/main/main';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  public logindetails;
  @ViewChild(Nav) nav: NavController;
  // rootPage:any = LogoutPage;
  public business:any;
  public table:any;
  public password:any;
  public logindata:any={
    business:"",
    table:"",
    password:""
  }
  public branchdetails:any=[];

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public toast: ToastController,
    public service: BuhariServiceProvider,
    public session: SessionStorageService,
    public menuController: MenuController,
    public events: Events,
    // public navCtrl: NavController,
    ) {
      this.events.publish('user:logout');

    platform.ready().then(() => {
      if (document.URL.indexOf("?") > 0) {
        let splitURL = document.URL.split("?");
        let splitParams = splitURL[1].split("&");
        let i: any;
        for (i in splitParams){
          let singleURLParam = splitParams[i].split('=');
          if (singleURLParam[0] == "business"){
            this.logindata.business = singleURLParam[1];
          }
          if (singleURLParam[0] == "table"){
            this.logindata.table = singleURLParam[1];
          }
          if (singleURLParam[0] == "password"){
            this.logindata.password = singleURLParam[1];
          }
        }
        this.session.store("tablenumber",this.logindata.table);
        this.session.store("businessid",this.logindata.business);
        this.session.store("logindetails",this.logindata);
        this.service.login(this.logindata).subscribe((resp:any)=>{
          if(resp.ReturnCode == "LS"){
            this.branchdetails = resp.branch_details;
            this.session.store("hoteldetails",this.branchdetails[0]);
            this.nav.push(MainPage);
          }
        })
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.  
      statusBar.styleDefault();
      splashScreen.hide();
      this.listenToLoginEvents();
    });
  }

  ionViewDidLoad() {
  }
  
  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.menuController.enable(true);
    });

    this.events.subscribe('user:logout', () => {
      this.menuController.enable(false);
    });
  }

  logout() {
    
    this.service.logout().subscribe((resp:any)=>{
      if(resp.ReturnCode == "LOS"){
        this.events.publish('user:logout');
      }
      else{
        this.showtoast(resp.Return);
      }
    })
    }

    showtoast(message){
      const toast = this.toast.create({
        message: message,
        duration: 3000
      });
      toast.present();   
    }
  }


