import { TestBed } from '@angular/core/testing';

import { ServicerequestService } from './servicerequest.service';

describe('ServicerequestService', () => {
  let service: ServicerequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicerequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
