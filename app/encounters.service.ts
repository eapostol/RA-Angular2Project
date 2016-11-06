import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AllEncounters } from './model/AllEncounters';

@Injectable()
export class EncountersService {

    private encountersUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';  // URL to web api

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
}