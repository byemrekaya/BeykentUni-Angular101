import { TestBed } from '@angular/core/testing';

import { CheckoutResolver } from './checkout.resolver';

describe('CheckoutResolver', () => {
  let resolver: CheckoutResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CheckoutResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
