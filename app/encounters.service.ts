import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AllEncounters } from './model/AllEncounters';
import { Encounter } from './model/Encounter';

@Injectable()
export class EncountersService {

    private encountersUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getEncounters(): Promise<AllEncounters>  {
        let x = this.http.get(this.encountersUrl);
        //console.log(x);
        let y = x.toPromise();
        //console.log(y);
        let z = y.then(response => response.json()).catch(this.handleError);
        //console.log(z instanceof Promise);
        //console.log(z);

        return z
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    newEncounter(encounter:Encounter): Promise<Encounter>{
        return this.http
            .post(this.encountersUrl, JSON.stringify({encounter}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().encounter)
            .catch(this.handleError);
    }

}