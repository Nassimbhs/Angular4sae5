import { TestBed } from '@angular/core/testing';

import { AddfollowService } from './addfollow.service';

describe('AddfollowService', () => {
  let service: AddfollowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfollowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
