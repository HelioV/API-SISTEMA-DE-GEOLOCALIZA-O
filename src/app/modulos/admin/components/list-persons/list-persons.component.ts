import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  localizacoes:any
  constructor(private servicemap:MapService) { }

  ngOnInit(): void {
    this.servicemap.pegarLocalizacoes().subscribe(
      sucess=>{
        this.localizacoes=sucess.data
      }
    )
  }

}
