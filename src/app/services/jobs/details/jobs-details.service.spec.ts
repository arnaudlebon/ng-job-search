import { TestBed } from '@angular/core/testing';

import { JobsDetailsService } from './jobs-details.service';

describe('JobsDetailsService', () => {
  let service: JobsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
