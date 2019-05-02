import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController,Events } from 'ionic-angular';
import { BuhariServiceProvider } from '../../providers/buhari-service/buhari-service';
import { MainPage } from '../main/main';

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})

export class FeedbackPage {

  // @ViewChild('food') food:ElementRef;
  public feed: any = {
    "order_no":"",
    "q1": "",
    "q2": "",
    "q3": "",
    "q4": "",
    "q5": "",
  };
  public ratings:any=[
    {"sno":"1","question":"How was the food from our hotel ?","rating":3},
    {"sno":"2","question":"How did our office staff behave during service ?","rating":0},
    {"sno":"3","question":"How would you rate our hotel overall ?","rating":0},
  ]

  public rating1: number = 0;
  public rating2: number = 0;
  public rating3: number = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toast: ToastController,
    public events: Events,
    public service: BuhariServiceProvider) {
      this.feed.order_no = this.navParams.get("order_id");
      events.subscribe('star-rating:changed', (starRating) => {
        this.rating1 = starRating;
        console.log("RATING---1",this.rating1);
      });
      events.subscribe('star-rating:changed',(starRating) => {
        this.rating2 = starRating;
        console.log("RATING---2",this.rating2);
      });
      events.subscribe('star-rating:changed',(starRating) => {
        this.rating3 = starRating;
        console.log("RATING---3",this.rating3);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  submitfeedback(feed) {
    console.log("RATING",this.ratings);
    if (feed.q1 && feed.q2 && feed.q3 && feed.q4 && feed.q5 != "") {
      console.log("Feedback", JSON.stringify(feed));
      this.service.submitFeedback(feed).subscribe((resp: any) => {
        if (resp.ReturnCode == "RIS") {
          this.showtoast("Thanks for your feedback. Please come again..");
          this.navCtrl.push(MainPage);
        }
      })
    } else {
      this.showtoast("Thankyou,Please come again..");
      this.navCtrl.push(MainPage);
    }
  }

  skipfeedback(ratings) {
    this.showtoast("Thanks for coming. Please come again");
    this.navCtrl.push(MainPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showtoast(message) {
    const toast = this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
