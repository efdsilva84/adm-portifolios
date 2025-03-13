import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';
import Starbucks from '../models/Starbucks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Admin 123456'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StarbucksService {

  constructor(private api: ApiService) { }

  getStarbucks() {
    return this.api.get('api/starbucks', false, httpOptions);
  }
 updateStarbucks(id:any, data:Starbucks) {
    return this.api.post(`api/starbucks/atualiza_star/${id}`, data, httpOptions);
  }
}