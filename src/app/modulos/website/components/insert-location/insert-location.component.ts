import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup,FormBuilder} from '@angular/forms';
import { MapService } from '../../../../services/map.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insert-location',
  templateUrl: './insert-location.component.html',
  styleUrls: ['./insert-location.component.css']
})
export class InsertLocationComponent implements OnInit {


  provincias=['Bengo','Benguela','Bié','Cabinda','Cuando-Cubango'
  ,'Cunene','Huambo','Huíla','Kwanza Sul','Kwanza Norte',
  'Luanda','Lunda Norte','Lunda Sul','Malanje','Moxico','Namibe','Uíge','Zaire']
  formularioLocalizacao:FormGroup = new FormGroup({})
  carregando:boolean=false
  messagemDeResultado:string=''

  constructor(private mapService:MapService,private rotas:Router) { }
  ngOnInit(): void {
    this.criarFormularioVehiculo();
  }
  criarFormularioVehiculo() {
    this.formularioLocalizacao = new FormGroup({
        nome: new FormControl ("", Validators.required),
        pais:new FormControl ("", Validators.required),
        provincia: new FormControl ("", Validators.required),
        latitude: new FormControl ("", Validators.required),
        longitude: new FormControl ("", Validators.required),
    })
  }

  efetuarCadastro(){

    if(this.formularioLocalizacao.valid)
    {
      this.messagemDeResultado='';
      this.carregando=true;
      this.mapService.inserirLocalizacao(this.formularioLocalizacao.value).subscribe(
        sucess=>{
             this.carregando=false;
             this.criarFormularioVehiculo();
             this.messagemDeResultado='Cadastrado com Sucesso';
             this.refreshPage();
        },
        error=>{
          this.carregando=false;
          this.messagemDeResultado='Erro no Cadastro:'+error;
        }
      )

    }else this.messagemDeResultado='Preencha todos campos';



  }

  CancelarTudo(){
    this.formularioLocalizacao.reset();
    this.messagemDeResultado='';
  }

  refreshPage(){
    window.location.reload();
  }
}
