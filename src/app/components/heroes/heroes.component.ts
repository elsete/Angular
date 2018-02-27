import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private _heroes:any[] = [];

  constructor(private _heroesService:HeroesService) { 
        
  }

  ngOnInit() {

    this._heroes = this._heroesService.getHeroes();

  }

}
