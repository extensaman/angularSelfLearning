import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
      return DISHES;
  }

  getDish(id: string) : Dish {
    return DISHES.filter((t) => (t.id === id))[0];
  }

  getFeaturedDish (): Dish {
    return DISHES.filter(d => d.featured)[0];
  }
}
