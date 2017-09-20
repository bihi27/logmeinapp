import {Component, OnInit} from '@angular/core';
import {CartItemNumberService} from '../cart-item-number.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  numberOfItemInCart = 0;

  constructor(private cartItemNumberService: CartItemNumberService) {
  }

  ngOnInit() {
    this.cartItemNumberService.currentItemNum.subscribe(num => this.numberOfItemInCart = num);
  }

}
