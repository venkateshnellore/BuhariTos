import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { SharedModule } from './shared.module';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from "ngx-webstorage";


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RequestPage } from '../pages/request/request';
import { CartPage } from '../pages/cart/cart';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { FeedbackPage } from '../pages/feedback/feedback';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{ItemlistPage} from '../pages/itemlist/itemlist';

import {DescriptionpagePage} from '../pages/descriptionpage/descriptionpage';
import {BillingdetailsPage} from '../pages/billingdetails/billingdetails';
import { BuhariServiceProvider } from '../providers/buhari-service/buhari-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RequestPage,
    CartPage,
    TabsPage,
    ItemlistPage,
    BillingdetailsPage,
    DescriptionpagePage,
    FeedbackPage,
    LoginPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2Webstorage,
    IonicModule.forRoot(MyApp,{
      scrollPadding:false,
    }),    
    IonicStorageModule.forRoot(),
    SharedModule
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
    ItemlistPage,
    BillingdetailsPage,
    // ItemdescriptionPage,
    DescriptionpagePage,
    LoginPage,
    MainPage,
    FeedbackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BuhariServiceProvider
  ],
})
export class AppModule {}
