import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class BuhariServiceProvider {

  constructor(public http: Http, public session: SessionStorageService) {
    console.log('Hello BuhariServiceProvider Provider');
  }

  // Get Template
  getfunction(): Observable<object[]> {
    return this.http.get('')
      .map(this.extractData)
      .catch(this.handleError);
  }

  // Post Template
  postfunction(): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    return this.http.post('', options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 1 - Login Service
  login(table): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "table_no": table.number,
      "password": table.password,
      "branch_id":table.businessid,

      "login_status_id": 1
    }

    return this.http.post('https://tos-production.herokuapp.com/Tablet_Login_And_Logout', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  //extra logout
  logout(): Observable<object[]> {
    let logindetails = this.session.retrieve("logindetails")

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "table_no": logindetails.number,
      "password": logindetails.password,
      "branch_id":logindetails.businessid,

      "login_status_id": 2
    }
    console.log("logout",body)
    return this.http.post('https://tos-production.herokuapp.com/Tablet_Login_And_Logout', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 2 - Food Menu (Home Page)
  menus(): Observable<object[]> {
   
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    let body ={
      

      "branch_id":this.session.retrieve("businessid"),
      
    }
    return this.http.post('https://tos-production.herokuapp.com/Display_Food_Menus',body,options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 3 - Place Order (Cart Page  --> Place Order Button Click)
  placeOrder(items, comments): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "table_no": this.session.retrieve("tablenumber"),
      "cus_name": this.session.retrieve("cus_name"),
      "cus_mobile": this.session.retrieve("cus_number"),
      "branch_id":this.session.retrieve("businessid"),
      "items": items,
      "comments": comments
    }

    console.log("REQUEST EXTRA ITEMS", JSON.stringify(body));
    return this.http.post('https://tos-production.herokuapp.com/Choose_Food_Order', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 4 - Ready for Billing (CARD OR CASH FOR BILLING)
  readyForBilling(payment_type): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "table_no": this.session.retrieve("tablenumber"),
      "branch_id":this.session.retrieve("businessid"),
      "payment_type_id": payment_type
    }

    return this.http.post('https://tos-production.herokuapp.com/Update_ReadyforPayment_Status', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 5 - Billing (Billing Page) (Get Billing Details)
  billing(): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "table_no": this.session.retrieve("tablenumber"),
      "branch_id":this.session.retrieve("businessid"),

    }

    return this.http.post('https://tos-production.herokuapp.com/Get_Order_Item_Table', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 6 - Request Extra Items (Select Items --> Request Page) (GET)
  requestItemsSelect(): Observable<object[]> {

    return this.http.get('https://tos-production.herokuapp.com/Query_Extra_Item_Category')
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 7 - Submit Feedback (Feedback Page)
  submitFeedback(param): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });


    return this.http.post('https://table-ordering-system.herokuapp.com/Insert_Feedback', param, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log("SUCCESS************", JSON.stringify(body));
    return body;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error("ERROR***********", errMsg);
    return Observable.throw(errMsg);
  }
}
