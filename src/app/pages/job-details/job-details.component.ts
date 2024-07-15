import { Component, input } from '@angular/core';
import { JobDetails } from '../../interfaces/jobs.interface';
import { CommonModule } from '@angular/common';
import { JobInfoComponent } from '../../components/job-info/job-info.component';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, JobInfoComponent],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent {
  jobDetails = input.required<JobDetails>()

  goBack() {
    history.back();
  }
}
