import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Business } from './interfaces/business';

@Injectable({
  providedIn: 'root'
})
export class YelpService {

apiUrl:string = 'https://api.yelp.com/v3/';
key:string = 'xoi7Cw7FoknAx5p880RtWQ';

  constructor(private http:HttpClient) { }

 
getData():any{ //suppose to be Observable
  return this.http.get<Business>(`${this.apiUrl}/businesses/`,
  {
    params: {
      api_key: this.key
    }
  });
}

}
