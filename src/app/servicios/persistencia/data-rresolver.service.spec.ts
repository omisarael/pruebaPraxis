import { TestBed } from '@angular/core/testing';

import { DataRresolverService } from './data-rresolver.service';

describe('DataRresolverService', () => {
  let service: DataRresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
