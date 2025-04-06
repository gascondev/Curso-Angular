import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10,
  }];

  // onDelete -> Creamos el evento que nos devolverá el id(number).
  // No modifica directamente los datos, solo notifica al padre
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {

    if ( !id ) return;

    this.onDelete.emit( id );
  }
}

// ListComponent (hijo):
// Recibe la lista de personajes como @Input()
// Cuando se quiere eliminar un personaje, emite el índice con @Output()
// No modifica directamente los datos, solo notifica al padre (main-page.components.ts)
