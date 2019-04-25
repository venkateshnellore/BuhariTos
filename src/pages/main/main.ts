import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  public backgrounds:any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service:BuhariServiceProvider,
              public session: SessionStorageService,
              public alertCtrl: AlertController) {
  }
  ionViewWillEnter() {
    this.service.menus().subscribe((resp: any) => {
      if (resp.ReturnCode == "RRS") {
        this.backgrounds  = resp.Returnvalue[0].Today_Special.items;
        console.log("toda*****************",JSON.stringify(this.backgrounds));
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Welcome',
      message: "Enter Name and Mobile number",
      inputs: [
        {
          name: 'name',
          placeholder: 'Enter your Name'
        },
        {
          name: 'mobile',
          placeholder: 'Enter your Mobile'
        },
      ],
      buttons: [
        {
          text: 'Skip',
          handler: data => {
            this.session.store("cus_name","");
            this.session.store("cus_number","");
            this.navCtrl.push(TabsPage);
          }
        },
        {
          text: 'Next',
          handler: data => {
            this.session.store("cus_name",data.name);
            this.session.store("cus_number",data.mobile);
            this.navCtrl.push(TabsPage);
          }
        }
      ]
    });
    prompt.present();
  }

  navigate(){
    this.showPrompt();
  }
}
