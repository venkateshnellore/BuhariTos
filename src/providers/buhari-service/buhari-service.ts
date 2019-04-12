// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
@Injectable()
export class BuhariServiceProvider {

  constructor(public http: Http, ) {
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
      "login_status_id": 1
    }

    return this.http.post('https://table-ordering-system.herokuapp.com/Tablet_Login_And_Logout', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 2 - Food Menu (Home Page)
  menus(): Observable<object[]> {

    return this.http.get('https://table-ordering-system.herokuapp.com/Display_Food_Menus')
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 3 - Place Order (Cart Page  --> Place Order Button Click)
  placeOrder(): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "table_no": 4,
      "items": [
        {
          "food_id": "5c4c9d7f-59fb-468c-8e74-a8250aefaaf6",// if customer choose food items , pass respective food id for the selected items
          "quantity": 1,
          "order_status_id": 5 // 5 means (customer choose place order so this key is required to pass 5)
        },
        {
          "food_id": "a62c9401-51e3-414e-ab72-7adcbced7d69",
          "quantity": 1,
          "order_status_id": 5
        }
      ],
      "comments": "Add more pepper"
    }

    return this.http.post('https://table-ordering-system.herokuapp.com/Choose_Food_Order', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 4 - Ready for Billing (Cart Page --> Billing Button Click )
  readyForBilling(): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "table_no":2,
      "order_no":"d5c44c58-be94-4546-8fd0-aec276225cb1",//from where it comes?
      "payment_type_id":1 //card(pass 2) or cash(pass 1)
    }

    return this.http.post('https://table-ordering-system.herokuapp.com/Update_ReadyforPayment_Status', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 5 - Billing (Billing Page)
  billing(): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    let body =
    {
      "table_no":2
    }

    return this.http.post('https://table-ordering-system.herokuapp.com/Get_Order_Item_Table', body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

    // 6 - Request Extra Items (Select Items --> Request Page)
    requestItemsSelect(): Observable<object[]> {
  
      return this.http.get('https://table-ordering-system.herokuapp.com/Query_Extra_Item_Category')
        .map(this.extractData)
        .catch(this.handleError);
    }

    // 7 - Reuest Extra Items (Request Items --> Request Page)(No Service)
    requestItems(): Observable<object[]> {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options = new RequestOptions({ headers: headers });
  
  
      return this.http.post('', options)
        .map(this.extractData)
        .catch(this.handleError);
    }
    // 8 - Submit Feedback (Feedback Page)
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
