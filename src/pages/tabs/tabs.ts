import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { RequestPage } from '../request/request';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RequestPage;
  tab3Root = CartPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
