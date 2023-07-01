import { Component } from '@angular/core';

import { nav } from "@commerce-trading/nav";

import { CommerceDropdownModule } from 'trading-category/category-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    console.log(nav);
  }
  title = 'daily-supplies-commerce-trading';
}
