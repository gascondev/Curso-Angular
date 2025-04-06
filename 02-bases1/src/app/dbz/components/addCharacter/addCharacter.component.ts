import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './addCharacter.component.html',
})
export class AddCharacterComponent {

  // Evento para enviar el nuevo personaje
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0
  };

  // Método que envía el nuevo personaje
  // Contiene la linea que envía el evento creado anteriormente @Output
  emitCharacter(): void {

    // debugger;  // Para debugear la aplicación

    console.log(this.character);
    if ( this.character.name.length === 0 ) return;
    // Aquí llamamos a nuestro evento
    this.onNewCharacter.emit(this.character);

    // Para limpiar el formulario despues de enviar
    this.character = { name: '', power: 0}
  }

 }
