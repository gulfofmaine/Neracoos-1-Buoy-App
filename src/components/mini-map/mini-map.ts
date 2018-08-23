import { Component } from '@angular/core';

/**
 * Generated class for the MiniMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mini-map',
  templateUrl: 'mini-map.html'
})
export class MiniMapComponent {

  text: string;

  constructor() {
    console.log('Hello MiniMapComponent Component');
    this.text = 'Hello World';
  }

}
