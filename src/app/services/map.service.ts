import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as L from 'leaflet';
import { Localizacao } from './modelos.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  urlAPI:string='http://192.168.8.103:8000/api/api-ndilayetu/pessoa'
  headers:any= { 'content-type': 'application/json'}
  constructor(private http:HttpClient) { }

  marcarLocalizacao(map: L.Map): void{

    this.http.get(this.urlAPI).subscribe((resultado:any)=>{

     if(resultado.code==204)
     {

       resultado.data.forEach((item:any) => {

              const posicao=L.marker([item.latitude,item.longitude])
               posicao.bindPopup(`<p><strong>${item.nome}</strong></p>`)
               .openPopup().addTo(map);

      });

     }

    })
  }

   pegarLocalizacoes():Observable<any>{
    return this.http.get(this.urlAPI,{'headers':this.headers})
   }
  inserirLocalizacao(localizacao: Localizacao):Observable<any>
  {
    const body=JSON.stringify(localizacao);
    return this.http.post(this.urlAPI, body,{'headers':this.headers})
  }
}
