import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StarbucksService } from 'src/app/services/starbucks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dados:any;
  dadosForm!: FormGroup;
  

  constructor(private starbucks: StarbucksService){

  }

  ngOnInit(){
    this.allStarbucks();
    // this.createPlatform();
  }



  allStarbucks(){
    this.starbucks.getStarbucks().subscribe((data:any)=>{
      this.dados = data;
      console.log("dados da land", this.dados);
    })
  }

  // createPlatform(){
  //   this.dadosForm = new FormGroup({
  //     titulo_banner: new FormControl(this.dadosForm.value.titulo_banner, [Validators.required]),
  //     quebra_titulo: new FormControl('', [Validators.required]),
  //     frase_1: new FormControl('', [Validators.required]),
  //     titulo_1: new FormControl('', [Validators.required]),
  //     titulo_2: new FormControl('', [Validators.required]),
  //     titulo_3: new FormControl('', [Validators.required]),
  //     titulo_4: new FormControl('', [Validators.required]),
  //     msg: new FormControl('', [Validators.required]),
  //     msg_titulo_2: new FormControl('', [Validators.required]),
  //     msg_titulo_3: new FormControl('', [Validators.required]),
  //     msg_titulo_4: new FormControl('', [Validators.required]),
  
  //   });
    
  // }

  editStarbucks(dados:any){
    console.log("formulario", this.dadosForm.value);
    console.log('dados passado na função', dados);


  }

}
