import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import  StarbucksModel  from 'src/app/models/Starbucks';
import { StarbucksService } from 'src/app/services/starbucks.service';
import { Modal } from 'bootstrap';
import Starbucks from 'src/app/models/Starbucks';


@Component({
  selector: 'app-edit-starbucks',
  templateUrl: './edit-starbucks.component.html',
  styleUrls: ['./edit-starbucks.component.css'],

})
export class EditStarbucksComponent {
  dados:any;
  dadosForm!: FormGroup;
  starbucksObj: StarbucksModel = new StarbucksModel();
  starbucksList: StarbucksModel[]=[];

  constructor(private starbucks: StarbucksService, private fb: FormBuilder){
    this.allStarbucks();
    // this.createForm();
  }

  ngOnInit(){
    this.starbucksObj = new StarbucksModel();
  }

initialForm(){
  this.dadosForm = this.fb.group({
    titulo_banner:['', Validators.required],
    quebra_titulo:['', Validators.required],
    frase_1:['', Validators.required],
    titulo_1:['', Validators.required],
    titulo_2:['', Validators.required],
    titulo_3:['', Validators.required],
    titulo_4:['', Validators.required],
    msg:['', Validators.required],
    msg_titulo_2:['', Validators.required],
    msg_titulo_3:['', Validators.required],
    msg_titulo_4:['', Validators.required],


    

  })
}


  allStarbucks(){
    this.starbucks.getStarbucks().subscribe((data:any)=>{
      this.dados = data;
      this.starbucksObj = data;
      console.log("dados da land", this.dados);
    })
  }

//   createForm(){
//     this.dadosForm = new FormGroup({
//       titulo_banner: new FormControl(this.starbucksObj.titulo_banner, [Validators.required]),
//       quebra_titulo: new FormControl(this.starbucksObj.quebra_titulo, [Validators.required]),
//       frase_1: new FormControl(this.starbucksObj.frase_1, [Validators.required]),
//       titulo_1: new FormControl(this.starbucksObj.titulo_1, [Validators.required]),
//       titulo_2: new FormControl(this.starbucksObj.titulo_2, [Validators.required]),
//       titulo_3: new FormControl(this.starbucksObj.titulo_3, [Validators.required]),
//       titulo_4: new FormControl(this.starbucksObj.titulo_4, [Validators.required]),
//       msg: new FormControl(this.starbucksObj.msg, [Validators.required]),
//       msg_titulo_2: new FormControl(this.starbucksObj.msg_titulo_2, [Validators.required]),
//       msg_titulo_3: new FormControl(this.starbucksObj.msg_titulo_3, [Validators.required]),
//       msg_titulo_4: new FormControl(this.starbucksObj.msg_titulo_4, [Validators.required]),

// })
//   }

  editarStar(item:any){
    this.starbucksObj = item;
  }
  sub(starbucksObj:StarbucksModel){
console.log('up', starbucksObj)
console.log('id a ser enviado', starbucksObj.id_msg);
    this.starbucks.updateStarbucks(starbucksObj.id_msg, starbucksObj).subscribe((data:any)=>{
      // console.log(data);
      this.allStarbucks();

    })

  }

}
