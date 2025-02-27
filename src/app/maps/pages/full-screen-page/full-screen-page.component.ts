import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map} from 'mapbox-gl';


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') 
  public divMap?: ElementRef;

  ngAfterViewInit(): void {

    if(!this.divMap) throw 'No se puede encontrar el elemento HTML';

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
