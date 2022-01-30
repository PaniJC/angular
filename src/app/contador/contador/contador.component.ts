
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ title }} </h1>
        <h3>La base es: <strong> {{ base }} </strong> </h3>

        <button (click)="acumular(-base)"> - {{ base }} </button>

        <span> {{ total }} </span>

        <button (click)="acumular(base)"> + {{ base }} </button>
    `
})
export class ContadorComponent {
    public title: string = 'Contador App';
    public total: number = 0;
    public base: number = 5;
  
  
    public acumular = (valor:number) =>
      this.total +=valor;
}