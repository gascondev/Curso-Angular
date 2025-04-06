import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'

})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000,
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500,
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500,
  }];



  // Inserta personaje
  addCharacter( character: Character): void {

    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);
  }

  // Elimina personaje
  // onDeleteCharacter( index: number): void {
    // this.characters.splice(index, 1);
  deleteCharacterById( id: string): void {
    this.characters = this.characters.filter( character => character.id !== id);
  }

}


// MainPageComponent (padre):
// Contiene la fuente de verdad de los datos (characters)
// Escucha el evento onDelete del hijo
// Es el único que realmente modifica los datos (con splice)
