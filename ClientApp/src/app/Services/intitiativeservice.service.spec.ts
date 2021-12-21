import { TestBed } from '@angular/core/testing';

import { IntitiativeserviceService } from './intitiativeservice.service';

describe('IntitiativeserviceService', () => {
  let service: IntitiativeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntitiativeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
