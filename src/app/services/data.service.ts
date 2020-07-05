import { Injectable } from '@angular/core';

// add using libraies/modules
import { HttpClient } from '@angular/common/http';
import * as Config from '../config/service.config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(Config.baseURL + 'users')
  }

}
