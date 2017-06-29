import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}
  private heroesUrl = 'https://angular-hero.herokuapp.com/heros/?name';

  search(term: string): Observable<Hero[]> {
  	const url = `${this.heroesUrl}=${term}`;
    return this.http
	  // .get(`api/heroes/?name=${term}`)
	  .get(`url`)
	  .map(response => response.json().data as Hero[]);
  }
}