export class Job implements iJob {
    id: number;
    name: string;
    description: string;

    constructor(newId:number, newName:string, newDescription:string){
        this.id = newId;
        this.name = newName;
        this.description = newDescription;
        return this;
    }
}