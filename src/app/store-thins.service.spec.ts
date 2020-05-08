import { TestBed } from '@angular/core/testing';

import { StoreThinsService } from './store-thins.service';

describe('StoreThinsService', () => {
  let service: StoreThinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreThinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
