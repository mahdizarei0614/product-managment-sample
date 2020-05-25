import { TestBed } from '@angular/core/testing';

import { RoutingFunctionsService } from './routing-functions.service';

describe('RoutingFunctionsService', () => {
  let service: RoutingFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
