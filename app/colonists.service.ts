import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Colonists } from './model/Colonists';
import { Colonist } from './model/Colonist';

@Injectable()
export class ColonistsService {

    private colonistsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getColonists(): Promise<Colonists>  {
        let x = this.http.get(this.colonistsUrl);
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


    newColonist(colonist:Colonist): Promise<Colonist> {
        return this.http
            .post(this.colonistsUrl, JSON.stringify({colonist}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().colonist)
            .catch(this.handleError);
    }
}