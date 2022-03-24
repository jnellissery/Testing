import { TestBed } from '@angular/core/testing';

import { TcsServiceService } from './tcs-service.service';

describe('TcsServiceService', () => {
  let service: TcsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
