import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.component.html',
  styleUrls: ['./lista-user.component.css']
})
export class ListaUserComponent {
  listaUsers:any =[];

constructor(private user:UserService){

}
ngOnInit() {
  this.getUsers();
}


getUsers(){
  this.user.buscarUser().subscribe((data:any)=>{
      this.listaUsers = data.data;
      console.log("lista de usuarios", this.listaUsers);
  })
}

}
