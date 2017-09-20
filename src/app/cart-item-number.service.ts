import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CartItemNumberService {

  private itemNum = new BehaviorSubject<number>(0);
  currentItemNum = this.itemNum.asObservable();

  constructor() {
    this.updateItemNum(this.getItemNum());
  }

  updateItemNum(num: number) {
    this.itemNum.next(num);
  }

  getItemNum() {
    const booksInCart = localStorage.getItem('booksInCart');
    if (booksInCart != null) {
      return JSON.parse(booksInCart).length;
    }
  }
}
