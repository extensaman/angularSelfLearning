import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { of, lastValueFrom } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return lastValueFrom(of(DISHES).pipe(delay(2000)));
  }

  getDish(id: string) : Promise<Dish> {
    return lastValueFrom(of(DISHES.filter((t) => (t.id === id))[0]).pipe(delay(2000)));
  }

  getFeaturedDish (): Promise<Dish> {
    return lastValueFrom(of(DISHES.filter(d => d.featured)[0]).pipe(delay(2000)));

  }
}
