export class Alien implements iAlien {
    type: string;
    submitted_by: string;
    id: number;
    description: string;

    constructor(newType:string, newSubmittedBy:string, newId:number, newDescription:string){
        this.type = newType;
        this.submitted_by = newSubmittedBy;
        this.id = newId;
        this.description = newDescription;
        return this;
    }
}