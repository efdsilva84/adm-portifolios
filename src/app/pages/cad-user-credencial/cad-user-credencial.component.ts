import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-cad-user-credencial',
  templateUrl: './cad-user-credencial.component.html',
  styleUrls: ['./cad-user-credencial.component.css']
})
export class CadUserCredencialComponent {
    listaEmpresas: any = [];
    listaAcessos:any =[];


  constructor(private user: UserService){

  }

  ngOnInit() {
    this.getEmpresas();
    this.getAcessos();
  }

// método buscando empresas
  getEmpresas(){
   this.user.buscarEmpresas().subscribe((data:any)=>{
      this.listaEmpresas = data.data;
        console.log("empresas", this.listaEmpresas);
   })
  }

  getAcessos(){
    this.user.buscarAcesso().subscribe((data:any)=>{
        this.listaAcessos = data.data;
          console.log("tipos de acesso", this.listaAcessos);
    })
  }


}
