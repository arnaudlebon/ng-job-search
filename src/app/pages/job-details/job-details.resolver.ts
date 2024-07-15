import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { JobDetails } from "../../interfaces/jobs.interface";
import { JobDetailsService } from "../../services/jobs/details/job-details.service";

export function jobDetailsResolver(route: ActivatedRouteSnapshot): Observable<JobDetails> {
  const jobId = Number(route.paramMap.get("jobId"));
  return inject(JobDetailsService).getJobDetails(jobId);
}
