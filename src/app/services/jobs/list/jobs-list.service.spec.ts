import { TestBed } from '@angular/core/testing';

import { JobsListService } from './jobs-list.service';

describe('JobsListService', () => {
  let service: JobsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
