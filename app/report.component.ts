import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { AliensService } from './aliens.service';
import { Alien } from './model/Alien';
import { AllAliens } from './model/AllAliens';
import { Encounter } from './model/Encounter';



@Component({
    selector: 'report',
    templateUrl: './app/report.component.html',
    styleUrls: [ './app/report.component.css' ],
    providers: [AliensService]
})
export class ReportComponent implements OnInit {
    allAliens: Alien[];

    encounter = new Encounter(2, 'Dec.25', 222, 'ectomorph', 'blah blah');

    constructor(private aliensService: AliensService) { }

    getEncounters(): void {
        this.aliensService.getAliens()
            .then(allAliens => {this.allAliens = ((allAliens as AllAliens).aliens); console.log(this.allAliens);});
    }

    ngOnInit(): void {
        this.getEncounters();
    }
}