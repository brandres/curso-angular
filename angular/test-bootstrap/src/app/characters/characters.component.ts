import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Character, Characters } from './characters.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Characters = [

  ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10').subscribe((c)=> this.characters = c as Characters);
  }

}
