import { Component, Input, input } from '@angular/core';
import { JobDetails } from '../../interfaces/jobs.interface';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../../components/job-card/job-card.component';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent {
  jobDetails = input.required<JobDetails>()

  goBack() {
    history.back();
  }
}
