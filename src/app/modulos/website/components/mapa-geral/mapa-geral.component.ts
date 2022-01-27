import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa-geral',
  templateUrl: './mapa-geral.component.html',
  styleUrls: ['./mapa-geral.component.css']
})
export class MapaGeralComponent implements OnInit,AfterViewInit {

  private map:any;
  constructor(private marcarLocalizacao:MapService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.initMap()
    this.marcarLocalizacao.marcarLocalizacao(this.map);
  }

  private initMap():void{

    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    /*this.map=L.map('map')
    .setView([32.33944,-6.360833],15)*/

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
