import { TestBed } from '@angular/core/testing';

import { NgxSpinnerServiceService } from './Ngx-spinner-service.service';

describe('NgxSpinnerServiceService', () => {
  let service: NgxSpinnerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSpinnerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
