export class Encounter implements iEncounter {
    id: number;
    date: string;
    colonist_id: number;
    atype: string;
    action: string;

    constructor(newId:number, newDate:string, newColonistId:number, newAType:string, newAction:string){
        this.id = newId;
        this.date = newDate;
        this.colonist_id = newColonistId;
        this.atype = newAType;
        this.action = newAction;
        return this;
    }
}