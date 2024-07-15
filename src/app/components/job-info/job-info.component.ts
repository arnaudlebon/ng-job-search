import { Component, input } from '@angular/core';
import { JobDetails } from '../../interfaces/jobs.interface';
import { CommonModule } from '@angular/common';
import { ToggleFavoriteDirective } from '../../directives/toggle-favorite.directive';

@Component({
  selector: 'app-job-info',
  standalone: true,
  imports: [CommonModule, ToggleFavoriteDirective],
  templateUrl: './job-info.component.html',
  styleUrl: './job-info.component.css'
})
export class JobInfoComponent {
  job = input.required<JobDetails>()
}
