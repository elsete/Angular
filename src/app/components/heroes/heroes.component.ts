import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  public heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService, private _router:Router) { 
  }

  ngOnInit(){
    this.heroes = this._heroesService.getHeroes()
  }

  public verHeroe(id:number){ 
    this._router.navigate(['/heroe', id]);
  }

  public buscarHeroe(termino:string)
  {
      const heroesArr:Heroe[] = [];
      termino = termino.toLowerCase();

      for(let heroe of this.heroes)
      {
        let nombre:string = heroe.nombre.toLowerCase();
        if(nombre.indexOf(termino) >= 0)
        {
          heroesArr.push(heroe);
        }
      }

      return heroesArr;
  }

}
