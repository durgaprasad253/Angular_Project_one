import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: String = 'Product Hunt';

  constructor() { }

  //LifeCycle method , we can put code that runs when the component loads(Initialise Code).
  ngOnInit(): void {}

  toggleAddProduct() {
    console.log('toggle');
  }

}
