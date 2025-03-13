import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Admin 123456'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  buscaLideres() {
    return this.api.get('cadastros/buscalideres', false, httpOptions);
  }

  cadastroUser(data:any){
    return this.api.post('cadastros/novouser', data, httpOptions);

  }
  buscarUser(){
    return this.api.get('cadastros/buscarusuarios', false, httpOptions);

  }
  buscarLocal(){
    return this.api.get('cadastros/buscarlocal', false, httpOptions);

  }
  buscarEmpresas(){
    return this.api.get('cadastros/buscaempresas', false, httpOptions);

  }
  buscarAcesso(){
    return this.api.get('cadastros/buscatipo_acesso', false, httpOptions);

  }
}
