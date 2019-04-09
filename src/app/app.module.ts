import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { SharedModule } from './shared.module';

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

//requst page
// import{RequstpagePage} from '../pages/requstpage/requstpage';
//item list
import{ItemlistPage} from '../pages/itemlist/itemlist';

import {DescriptionpagePage} from '../pages/descriptionpage/descriptionpage';
import {BillingdetailsPage} from '../pages/billingdetails/billingdetails';
// import { FeedbackPageModule } from '../pages/feedback/feedback.module';
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
    // ItemdescriptionPage,
    DescriptionpagePage,
    FeedbackPage,
    LoginPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    // FeedbackPageModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
