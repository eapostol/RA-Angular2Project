import { iAllAliens } from './iAllAliens';
import { Alien } from './Alien';

export class AllAliens implements iAllAliens {
    aliens: Alien[];

    constructor(newAliens:Alien[]){
        this.aliens = newAliens;

        return this;
        //return this.allJobs as Job[];
    }
}