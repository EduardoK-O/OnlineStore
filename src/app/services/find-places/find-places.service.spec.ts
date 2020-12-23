import { TestBed } from '@angular/core/testing';

import { FindPlacesService } from './find-places.service';

describe('FindPlacesService', () => {
  let service: FindPlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindPlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
