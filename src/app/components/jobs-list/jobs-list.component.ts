import { Component, Signal, inject } from '@angular/core';
import { Jobs } from '../../interfaces/jobs.interface';
import { JobsListService } from '../../services/jobs/list/jobs-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent {
  private readonly jobsListService = inject(JobsListService);
  protected jobs!: Signal<Jobs>;

  constructor() {
    this.listJobs();
  }

  listJobs() {
    this.jobs = this.jobsListService.list();
  }
}
