import { Component, input } from '@angular/core';
import { JobDetails } from '../../interfaces/jobs.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  job = input.required<JobDetails>()
}
