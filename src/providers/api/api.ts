import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = '/api';
  
  constructor(public http: HttpClient) {
  }
  

  get(endpoint: string, params?: any, reqOpts?: any) {
   
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
     if (params) {
      
      return this.http.get(this.url + '/' + endpoint + "/" + params);

    }

    return this.http.get(this.url + '/' + endpoint);
    
  }

  post(endpoint: string, body: object, id?: string, reqOpts?: any) {
    let loc = this.url + '/' + endpoint;
    if(id!=undefined){
      loc = this.url + '/' + endpoint + "/" + id;
    }
    return this.http.post(loc, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, id: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint + "/" + id, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
