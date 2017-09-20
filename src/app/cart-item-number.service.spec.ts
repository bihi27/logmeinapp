import { TestBed, inject } from '@angular/core/testing';

import { CartItemNumberService } from './cart-item-number.service';

describe('CartItemNumberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartItemNumberService]
    });
  });

  it('should be created', inject([CartItemNumberService], (service: CartItemNumberService) => {
    expect(service).toBeTruthy();
  }));
});
