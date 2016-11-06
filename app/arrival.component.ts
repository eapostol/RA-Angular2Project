import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';


import { Job } from './model/Job';
import { AllJobs } from './model/AllJobs';
import { JobService } from './job.service';
import { Colonist } from './model/Colonist';
import { ColonistsService } from './colonists.service';

@Component({
    selector: 'arrival',
    templateUrl: './app/arrival.component.html',
    styleUrls: [ './app/arrival.component.scss' ],
    providers: [JobService, ColonistsService]
})

export class ArrivalComponent implements OnInit {
    allJobs: Job[];
    colonist: Colonist;
    job: Job;
    NO_OCCUPATION_SELECTED = '(none)';
    NO_VALUE: any;




    constructor(private jobService: JobService, private colonistsService: ColonistsService, private router:Router) {
        this.job = new Job(this.NO_VALUE, this.NO_OCCUPATION_SELECTED, '');
        this.colonist = new Colonist('', (this.job), this.NO_VALUE, this.NO_VALUE,);
        //console.log('this.colonist.name = ' + this.colonist.name);
    }

    get noOccupation() {
        return this.colonist.job.name === this.NO_OCCUPATION_SELECTED;
    }

    getJobs(): void {
        this.jobService.getJobs()
            .then(allJobs => {
                this.allJobs = (allJobs as AllJobs).jobs;
                console.log(this.allJobs);
            });

    }

    ngOnInit(): void {
        this.getJobs();
    }

    onSubmit(){
        for (let j in this.allJobs) {
            if (this.allJobs[j].name == this.colonist.job.name) {
                console.log('you match and made it into the loop');
                this.colonist.job.id = this.allJobs[j].id;
                this.colonist.job_id = String(this.allJobs[j].id);
                this.colonist.job.description = this.allJobs[j].description;
                break;
            }
        }
        this.colonistsService
            .newColonist(this.colonist)
            .then(colonist => {
                this.router.navigateByUrl('/encounters');
                //set colonist id to local storage
                this.setLocalStorage(colonist);
            })

    }

    setLocalStorage(colonist){
        if (typeof (Storage) != undefined){
            let ls= localStorage;
            ls.setItem(colonist.name, colonist.id);
        }  else {
            console.log('Cody says you need a new browser! boo');
            return
        }
    }

}