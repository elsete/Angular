import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  public heroes:Heroe[] = [];
  public termino:string;

  constructor(private activatedRoute:ActivatedRoute,
            private _heroesService: HeroesService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroe(this.termino);

        console.log(this.heroes);
    });
  }

}