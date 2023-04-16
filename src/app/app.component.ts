import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lr-nail';

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

  openWindow(url: string){
    window.open(url, '_blank')
    console.log('teste')
  }
}
