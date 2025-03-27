import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Admin 123456'
  })
};
@Injectable({
  providedIn: 'root'
})
export class EburgerService {

  constructor(private api: ApiService) {
    
   }

    newBurger(data: any) {
       return this.api.post('api/eburger/create_burger', data, httpOptions);
     }

     allBurgers() {
      return this.api.get('api/eburger', false, httpOptions);
    }


   
}
