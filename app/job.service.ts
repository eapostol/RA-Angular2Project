import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AllJobs } from './model/AllJobs';

@Injectable()
export class JobService {

    private jobsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';  // URL to web api

    constructor(private http: Http) { }

    getJobs(): Promise<AllJobs>  {
        let x = this.http.get(this.jobsUrl);
        //console.log(x);
        let y = x.toPromise();
        //console.log(y);
        let z = y.then(response => response.json()).catch(this.handleError);
        //console.log(z instanceof Promise);

        return z
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}