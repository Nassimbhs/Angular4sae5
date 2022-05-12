import { TestBed } from '@angular/core/testing';

import { SearchcritereService } from './searchcritere.service';

describe('SearchcritereService', () => {
  let service: SearchcritereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchcritereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
