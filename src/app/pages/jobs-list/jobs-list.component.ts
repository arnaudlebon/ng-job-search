import { Component, Signal, inject } from '@angular/core';
import { Jobs } from '../../interfaces/jobs.interface';
import { JobsListService } from '../../services/jobs/list/jobs-list.service';
import { CommonModule } from '@angular/common';
import { JobListItemComponent } from '../../components/job-list-item/job-list-item.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule, JobListItemComponent],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent {
  readonly jobsListService = inject(JobsListService);
  protected jobs = toSignal(this.jobsListService.list());
}
