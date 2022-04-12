import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {


  }
  private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  // observe: How much of the response to return.
  // responseType: The return data format.
  getPosts() {
    return this.http.get(this.url);
  }
}
