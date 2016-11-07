import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { EncountersService } from './encounters.service';
import { ColonistsService } from './colonists.service';
import { Encounter } from './model/Encounter';
import { AllEncounters } from './model/AllEncounters';
import { Colonist } from './model/Colonist';
import { Colonists } from './model/Colonists';


@Component({
    selector: 'encounters',
    templateUrl: './app/encounters.component.html',
    styleUrls: [ './app/encounters.component.scss' ],
    providers: [EncountersService, ColonistsService]
})
export class EncountersComponent implements OnInit {
    allEncounters: Encounter[];
    allColonists: Colonist[];


    constructor(private encountersService: EncountersService, private colonistsService: ColonistsService) {

    }

    getEncounters(): void {
        this.encountersService.getEncounters()
            .then(allEncounters => {
                this.allEncounters = ((allEncounters as AllEncounters).encounters);
                let endNum: number = this.allEncounters.length;
                let startNum: number = this.allEncounters.length - 8;
                this.allEncounters = this.allEncounters.slice(startNum, endNum);

                console.log(this.allEncounters);});
    }

    getColonists(): void {
        this.colonistsService.getColonists()
            .then(allColonists => {
                this.allColonists = ((allColonists as Colonists).colonists);

            })
    }

    ngOnInit(): void {
        this.getEncounters();
        this.getColonists();
    }
}