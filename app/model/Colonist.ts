import { iColonist } from './iColonist';
import { Job } from './Job';

export class Colonist implements iColonist {
    name: string;
    job: Job;
    id: number;
    age: number;
    job_id?: string;

    constructor(newName:string, newJob:Job, newId:number, newAge:number, newJobId:string){
        this.name = newName;
        this.job = newJob;
        this.id = newId;
        this.age = newAge;
        this.job_id = newJobId;

        return this;
    }

}