import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { Jobs } from '../../../interfaces/jobs.interface';

const ENDPOINT = '/jobs'

@Injectable({
  providedIn: 'root'
})
export class JobsListService {
  private readonly http = inject(HttpClient);
  private isLoading = signal(false);
  private jobsResults = signal<Jobs>([]);

  constructor() { }

  list(): Signal<Jobs> {
    this.isLoading.set(true);
    this.http.get<Jobs>(ENDPOINT).subscribe(data => {
      this.jobsResults.set(data);
      this.isLoading.set(false);
    });
    return this.jobsResults.asReadonly();
  }
}
