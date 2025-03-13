import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-cad-user',
  templateUrl: './cad-user.component.html',
  styleUrls: ['./cad-user.component.css']
})
export class CadUserComponent {
  listaLideres: any = [];
  listaLocal: any =[];

  constructor(private user:UserService, private router: Router){

  }


  ngOnInit() {
      this.getLideres();
      this.getLocal();
  }

  getLideres(){
    this.user.buscaLideres().subscribe((data:any)=>{
        this.listaLideres = data.data;
          console.log("lista de lideres", this.listaLideres);
    })
  }
  dadosForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    matricula: new FormControl('', [Validators.required]),
    fk_lider: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    fk_local_trabalho: new FormControl('', [Validators.required]),
  });
  async caduser(form:any){

    console.log("dados form", this.dadosForm.value);
      this.user.cadastroUser(this.dadosForm.value).subscribe((data:any)=>{
        console.log("cadastro realizado", data);
          this.router.navigate(['listar-user'])
      })
  }

  async getLocal(){
    this.user.buscarLocal().subscribe((data:any)=>{
        this.listaLocal = data.data;
        console.log("lista local", this.listaLocal);
    })
  }



}
