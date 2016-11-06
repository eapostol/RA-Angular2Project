import { iColonists } from './iColonists';
import { Colonist } from './Colonist';

export class Colonists implements iColonists {
    colonists: Colonist[];

    constructor(allNewColonists:Colonist[]){

        this.colonists = allNewColonists;

        return this;
        //return this.allColonists as Colonist[];
        // as is key word that says lets cast this variable as something else
    }
}