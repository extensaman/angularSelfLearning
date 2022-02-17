import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
      return new Promise(resolve => {
        //Simulate server delay with 2 second 
        setTimeout(()=> resolve(DISHES), 2000);
      });
  }

  getDish(id: string) : Promise<Dish> {
    return new Promise(resolve => {
      //Simulate server delay with 2 second 
      setTimeout(()=> resolve(DISHES.filter((t) => (t.id === id))[0]));
    });
  }

  getFeaturedDish (): Promise<Dish> {
    return new Promise(resolve => {
      //Simulate server delay with 2 second 
      setTimeout(()=> resolve(DISHES.filter(d => d.featured)[0]), 2000);
    });
  }
}
