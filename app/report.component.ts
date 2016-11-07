import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AliensService } from './aliens.service';
import { EncountersService } from './encounters.service';
import { Alien } from './model/Alien';
import { AllAliens } from './model/AllAliens';
import { Encounter } from './model/Encounter';
import { LocalStorageWorker} from './model/Local_storage_worker';



@Component({
    selector: 'report',
    templateUrl: './app/report.component.html',
    styleUrls: [ './app/report.component.css' ],
    providers: [AliensService, EncountersService, LocalStorageWorker]
})


export class ReportComponent implements OnInit {
    allAliens: Alien[];
    encounter: Encounter;
    NO_ALIEN_SELECTED = '(none)';
    NO_VALUE: any;
    id_colonist: number;
    date: any;

    constructor(private aliensService: AliensService, private encountersService: EncountersService, private router: Router, public localStorage:LocalStorageWorker) {
        this.id_colonist = Number(this.localStorage.get('ColonistId'));
        console.log(this.id_colonist);
        this.date = String(this.getDate());
        console.log(this.date);
        this.encounter = new Encounter(this.NO_VALUE, this.date, this.id_colonist, this.NO_ALIEN_SELECTED, '');
    }

    getDate(){
        let today: any = new Date;
        let dd: any = today.getDate();
        let mm: any = today.getMonth()+1; //January is 0!
        let yyyy: any = today.getFullYear();


        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        let todaysDate:string = yyyy+'-'+mm+'-'+dd;
        return todaysDate;
    }

    getEncounters(): void {
        this.aliensService.getAliens()
            .then(allAliens => {
                this.allAliens = ((allAliens as AllAliens).aliens);
                console.log(this.allAliens);
            });
    }

    ngOnInit(): void {
        this.getEncounters();
    }

    onSubmit(){
        this.encountersService
            .newEncounter(this.encounter)
            .then(encounter => {
                this.router.navigateByUrl('/encounters');
            })

    }
}