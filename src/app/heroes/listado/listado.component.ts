import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  public heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor', 'Capitán América'] ;
  public heroeBorrado:string = '';
  public borraronHeroe: boolean = false;

  borrarHeroe() {
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
