import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RequestPage } from '../pages/request/request';
import { CartPage } from '../pages/cart/cart';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

<<<<<<< HEAD
//requst page
import{RequstpagePage} from '../pages/requstpage/requstpage';
//item list
import{ItemlistPage} from '../pages/itemlist/itemlist';
=======
>>>>>>> 5c2879beacc6a2778f24b4479312d67725190af1

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RequestPage,
    CartPage,
    TabsPage,
<<<<<<< HEAD
    ItemlistPage
=======
    LoginPage,
    MainPage
>>>>>>> 5c2879beacc6a2778f24b4479312d67725190af1
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      scrollPadding:false,
    }),    
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RequestPage,
    CartPage,
    TabsPage,
<<<<<<< HEAD
    ItemlistPage
=======
    LoginPage,
    MainPage
>>>>>>> 5c2879beacc6a2778f24b4479312d67725190af1
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
