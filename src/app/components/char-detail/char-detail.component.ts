import { Component, inject, Input, OnInit } from '@angular/core';
import { Character } from '../../common/interface-rick-morty';
import { CharactersService } from '../../services/characters.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-char-detail',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './char-detail.component.html',
  styleUrl: './char-detail.component.css'
})
export class CharDetailComponent implements OnInit{
  @Input("id") id!: number;
  character!: Character;
  private rmService: CharactersService = inject(CharactersService)

  ngOnInit(): void {
    this.loadCharacter();
  }

private loadCharacter() {
  this.rmService.getCharacter(this.id).subscribe({
    next: value => {
      this.character = value
    },
    error: err => console.error(err),
    complete: () => console.log('Personaje cargado')
  })
  }
}
