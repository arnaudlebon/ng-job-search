export interface Job {
  id: number,
  companyName: string,
  title: string,
  companyLogo: string,
  reference: string,
}

export interface JobDetails extends Job {
  location: string,
  industries: string[],
  types: string[],
  description: string,
  publishDate: Date,
}

export type Jobs = Job[];

export type JobId = Job['id'];
export type JobIds = Array<Job['id']>;
