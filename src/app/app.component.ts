import { Component, ViewChild } from '@angular/core';
import { MapDirectionsService, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lr-nail';

  center: google.maps.LatLngLiteral = {
      lat: -19.97724, 
      lng: -44.06908
  };

  markerPosition: google.maps.LatLngLiteral = {      lat: -19.97724, lng: -44.06908};
  zoom = 15;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    margin:20,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      740: {
        items: 2
      },
      800: {
        items: 3
      }
    },
    nav: true
  }

}
