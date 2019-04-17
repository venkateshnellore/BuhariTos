import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
         console.log("feed back successfully submitted");
      }
    })
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
