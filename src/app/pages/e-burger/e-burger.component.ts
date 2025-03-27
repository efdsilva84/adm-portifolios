import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import EburgerNodel from 'src/app/models/Eburger';
import { EburgerService } from 'src/app/services/eburger.service';

@Component({
  selector: 'app-e-burger',
  templateUrl: './e-burger.component.html',
  styleUrls: ['./e-burger.component.css']
})
export class EBurgerComponent {
  uploadFilesNames:string[]=[];
  eburgerObj: EburgerNodel = new EburgerNodel();
  selectedFile: File | null = null;  // Armazena a imagem selecionada
  uploadForm!: FormGroup;


  
      constructor(private eburger: EburgerService, private fb: FormBuilder){
        this.uploadForm = this.fb.group({
          burger: ['', Validators.required],
          details: ['', Validators.required],
          preco: ['', Validators.required],
          imagem: ['', Validators.required],
          img_name: ['', Validators.required]
        });

      }

      ngOnInit(){
        this.getAllBurgers();
        // this.createPlatform();
      }


      getAllBurgers(){
        this.eburger.allBurgers().subscribe((data:any)=>{
          console.log("todos os hamburgers", data);
        })
      }

      onFileSelected(event: any) {

        const file: File = event.target.files[0];

        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const base64String = (reader.result as string).split(',')[1];
            this.uploadForm.patchValue({ imagem: base64String });
          };
          reader.readAsDataURL(file);
        }
        // debugger;
        // this.selectedFile = event.target.files[0];
        // this.uploadForm.patchValue({ imagem: this.selectedFile });
        // console.log("imagem", this.selectedFile);

        
      }

      onSubmit() {
        console.log("formulario", this.uploadForm.value);
        // if (this.uploadForm.invalid || !this.selectedFile) {
        //   return;
        // }
  
        this.eburger.newBurger(this.uploadForm.value).subscribe((data:any)=>{
          console.log("data edcarlos furta da silva", data);
          // debugger;
          // console.log("função imagem", data);
        })
      }

    // Captura a imagem selecionada
    // uploadImg(event: any) {
    //   const file = event.target.files[0];
    //   if (file) {
    //     this.selectedFile = file;
    //     console.log("Imagem selecionada:", file.name);
    //   }
    // }


  // uploadImg(event:any){
  //   // debugger;
  //   const file =event.currentTarget.files[0];
  //   const formObj = new FormData();
  //   formObj.append('file', file);

  //   console.log("minha images", file);
  //   this.uploadFilesNames.push(file);
  // }

  // novoHamburger(novoHamburger:EburgerNodel){
  //   const formData = new FormData();
    
  //   // Adiciona os dados do formulário ao FormData
  //   formData.append('burger', this.eburgerObj.burger);
  //   formData.append('details', this.eburgerObj.details);
  //   formData.append('preco', this.eburgerObj.preco.toString());
    
  //   // Adiciona a imagem ao FormData (se existir)
  //   if (this.selectedFile) {
  //     formData.append('file', this.selectedFile);
  //   }

  //   // Envia o formulário via serviço
  //   console.log("fomrulario enviado", formData);
  //   this.eburger.newBurger(formData).subscribe((data: any) => {
  //     console.log('Hambúrguer criado com sucesso!', data);
  //   });
  // }








  //     console.log(" novo ham", novoHamburger, this.uploadFilesNames);
  //     this.eburger.newBurger(novoHamburger).subscribe((data:any)=>{
  //       console.log('criação do hamburder', data)
  //     })
  // }

}
