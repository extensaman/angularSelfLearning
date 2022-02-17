import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve => {
      //Simulate server delay with 2 second 
      setTimeout(()=> resolve(PROMOTIONS), 2000);
    });
}

getPromotion(id: string) : Promise<Promotion> {
  return new Promise(resolve => {
    //Simulate server delay with 2 second 
    setTimeout(()=> resolve(PROMOTIONS.filter((t) => (t.id === id))[0]), 2000);
  });
}

getFeaturedPromotion (): Promise<Promotion> {
  return new Promise(resolve => {
    //Simulate server delay with 2 second 
    setTimeout(()=> resolve(PROMOTIONS.filter(d => d.featured)[0]), 2000);
  });
}
}
