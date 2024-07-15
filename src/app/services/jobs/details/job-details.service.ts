import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { JobDetails, JobId } from '../../../interfaces/jobs.interface';
import { HttpClient } from '@angular/common/http';

const ENDPOINT = '/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobDetailsService {
  private http = inject(HttpClient);

  constructor() { }

  getJobDetails(jobId: JobId): Observable<JobDetails> {
    return this.http.get<JobDetails>(`${ENDPOINT}/${jobId}`);
  }
}
