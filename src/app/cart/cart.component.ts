import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {CartItemNumberService} from '../cart-item-number.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];

  constructor(private http: Http,
              private cartItemNumberService: CartItemNumberService,
              private router: Router) {
  }

  ngOnInit() {
    const booksInCart = JSON.parse(localStorage.getItem('booksInCart'));
    if (booksInCart != null) {
      for (let i = 0; i < booksInCart.length; i++) {
        this.http.get('https://www.googleapis.com/books/v1/volumes/'
        + booksInCart[i] + '?key=AIzaSyDvavdq0tujZSNeBjHM4YvuV_2Vr1JAj8A')
          .subscribe((response: Response) => {
              const data = response.json();
              this.items.push(data);
            }
          );
      }
    }
  }

  removeAllItem() {
    localStorage.clear();
    this.cartItemNumberService.updateItemNum(0);
    this.items = [];
  }

  onLoadBookdetails(id: string) {
    this.router.navigate(['/details'], {queryParams: {id: id}});
  }

}
