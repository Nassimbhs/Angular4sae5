import { TestBed } from '@angular/core/testing';

import { AcceptfollowService } from './acceptfollow.service';

describe('AcceptfollowService', () => {
  let service: AcceptfollowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceptfollowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
