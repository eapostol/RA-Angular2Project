import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AllAliens } from './model/AllAliens';

@Injectable()
export class AliensService {

    private aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';  // URL to web api

    constructor(private http: Http) { }

    getAliens(): Promise<AllAliens>  {
        let x = this.http.get(this.aliensUrl);
        //console.log(x);
        let y = x.toPromise();
        //console.log(y);
        let z = y.then(response => response.json()).catch(this.handleError);
        console.log(z);

        return z
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}