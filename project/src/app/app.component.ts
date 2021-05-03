import { Component } from '@angular/core';
import * as data from './files/config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal';
  data: any = (data as any).default; //Cargamos todos los atributos del json 
}
