import { Component,ViewChild, } from '@angular/core';
import { Nav,Platform,ToastController, MenuController, NavController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BuhariServiceProvider } from '../providers/buhari-service/buhari-service';
import { SessionStorageService } from 'ngx-webstorage';
import { Storage } from '@ionic/storage'


import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { FeedbackPage } from '../pages/feedback/feedback';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  public logindetails;
  // @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  
  
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public toast: ToastController,
    public service: BuhariServiceProvider,
    public session: SessionStorageService,
    public menuController: MenuController,
    public events: Events,
    ) {
      this.events.publish('user:logout');

    platform.ready().then(() => {
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


