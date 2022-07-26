import { TestBed } from '@angular/core/testing';

import { OpenBreweryService } from './open-brewery.service';

describe('OpenBreweryService', () => {
  let service: OpenBreweryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenBreweryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
