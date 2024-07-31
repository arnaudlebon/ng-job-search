import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { Jobs } from '../../../interfaces/jobs.interface';
import { delay, map, Observable, shareReplay, switchMap } from 'rxjs';
import { JobsFavoritesService } from '../favorites/favorites.service';
import { toObservable } from '@angular/core/rxjs-interop';

const ENDPOINT = '/jobs';

@Injectable({
  providedIn: 'root',
})
export class JobsListService {
  private readonly http = inject(HttpClient);
  private listing = signal(false);
  private jobsResults = signal<Jobs>([]);

  private favorites$ = toObservable(inject(JobsFavoritesService).favorites);
  readonly jobsFavoritesList$: Observable<Jobs> = this.favorites$.pipe(
    switchMap((jobIds) => this.list(jobIds)),
    shareReplay(1)
  );

  constructor() {}

  get isListing(): Signal<boolean> {
    return this.listing.asReadonly();
  }

  list(ids?: number[]): Observable<Jobs> {
    this.listing.set(true);
    return this.http.get<Jobs>(ENDPOINT).pipe(
      delay(100),
      map((data) => {
        if (ids && ids.length > 0) {
          return data.filter((job) => ids.includes(job.id));
        }
        return data;
      }),
      map((jobs) => {
        this.jobsResults.set(jobs);
        this.listing.set(false);
        return jobs;
      })
    );
  }
}
