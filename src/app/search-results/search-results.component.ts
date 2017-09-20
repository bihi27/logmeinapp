import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {CartItemNumberService} from '../cart-item-number.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchQuery: string;
  results = [];

  constructor(private http: Http,
              private cartItemNumberService: CartItemNumberService,
              private router: Router) {
  }

  ngOnInit() {
  }

  getSearchResults() {
    this.http.get('https://www.googleapis.com/books/v1/volumes?q=intitle:'
    + this.searchQuery + '&key=AIzaSyDvavdq0tujZSNeBjHM4YvuV_2Vr1JAj8A')
      .subscribe((respose: Response) => {
          const result = respose.json();
          this.results = [];
          if (result.totalItems > 0) {
            for (let i = 0; i < result.items.length; i++) {
              this.results.push(result.items[i]);
            }
          }
        }
      );
  }

  addToCart(itemId: string) {
    const booksInCart = localStorage.getItem('booksInCart');
    let newBookCartArray = [];
    if (booksInCart != null) {
      if (!booksInCart.includes(itemId)) {      // indexOf metódust régebbi böngészők is támogatják, megegyezés kérdése melyiket használjam
        newBookCartArray = JSON.parse(booksInCart).concat(itemId);
        localStorage.setItem('booksInCart', JSON.stringify(newBookCartArray));
        this.cartItemNumberService.updateItemNum(newBookCartArray.length);
      }
    } else {
      newBookCartArray.push(itemId);
      localStorage.setItem('booksInCart', JSON.stringify(newBookCartArray));
      this.cartItemNumberService.updateItemNum(newBookCartArray.length);
    }
  }

  onLoadBookdetails(id: string) {
    this.router.navigate(['/details'], {queryParams: {id: id}});
  }

}
