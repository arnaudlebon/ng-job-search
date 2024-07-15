import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { Jobs } from '../../../interfaces/jobs.interface';
import { delay, map } from 'rxjs';

const ENDPOINT = '/jobs';

@Injectable({
  providedIn: 'root',
})
export class JobsListService {
  private readonly http = inject(HttpClient);
  private listing = signal(false);
  private jobsResults = signal<Jobs>([]);

  constructor() {}

  get isListing(): Signal<boolean> {
    return this.listing.asReadonly();
  }

  list(ids?: number[]): Signal<Jobs> {
    this.listing.set(true);
    this.http
      .get<Jobs>(ENDPOINT)
      .pipe(
        //delay(100),
        map((data) => {
          if (ids && ids.length > 0) {
            return data.filter((job) => ids.includes(job.id));
          }
          return data;
        })
      )
      .subscribe((data) => {
        this.jobsResults.set(data);
        this.listing.set(false);
      });
    return this.jobsResults.asReadonly();
  }
}
