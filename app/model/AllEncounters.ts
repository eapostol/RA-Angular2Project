import { iAllEncounters } from './iAllEncounters';
import { Encounter } from './Encounter';

export class AllEncounters implements iAllEncounters {
    encounters: Encounter[];

    constructor(newEncounters:Encounter[]){
        this.encounters = newEncounters;

        return this;
    }
}