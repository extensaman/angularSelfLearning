import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(PROMOTIONS);
}

getPromotion(id: string) : Promise<Promotion> {
  return Promise.resolve(PROMOTIONS.filter((t) => (t.id === id))[0]);
}

getFeaturedPromotion (): Promise<Promotion> {
  return Promise.resolve(PROMOTIONS.filter(d => d.featured)[0]);
}
}
