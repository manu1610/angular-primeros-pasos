import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';


@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 500
  }, {
    id: uuid(),
    name: 'Goku',
    power: 6500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 9500
  }];

  addCharacter(character: Character): void{
    const newCharacter: Character = {id: uuid(), ...character};
    this.characters.push(newCharacter);
  }

  //onDeleteCharacter(index: number): void{
  deleteCharacterById(id: string): void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
