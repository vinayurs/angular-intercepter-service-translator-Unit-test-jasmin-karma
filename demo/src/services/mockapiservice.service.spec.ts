import { TestBed } from '@angular/core/testing';

import { MockapiserviceService } from './mockapiservice.service';

describe('MockapiserviceService', () => {
  let service: MockapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
