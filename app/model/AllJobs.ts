import { iJobs } from './iJobs';
import { Job } from './Job';

export class AllJobs implements iJobs {
    jobs: Job[];

    constructor(newJobs:Job[]){
        this.jobs = newJobs;

        return this;
    }
}