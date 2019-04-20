import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
import { MainPage } from '../main/main';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  public feed:any={
    "q1":"",
    "q2":"",
    "q3":"",
    "q4":"",
    "q5":"",
  };
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public toast: ToastController,
              public service: BuhariServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  submitfeedback(feed){
    console.log("Feedback",JSON.stringify(feed));
    let body= {
      "q1":"Good",
      "q2":"Pair",
      "q3":"Good",
      "q4":"Yes",
      "q5":"Good"
    }
    this.service.submitFeedback(body).subscribe((resp:any)=>{
      if(resp.ReturnCode == "RIS"){
        this.showtoast("Thanks for your feedback. Please come again..");
        this.navCtrl.push(MainPage);         
      }
    })
  }

  skipfeedback(){
    this.showtoast("Thanks for coming. Please come again");
    this.navCtrl.push(MainPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  showtoast(message){
    const toast = this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();   
  }
}
