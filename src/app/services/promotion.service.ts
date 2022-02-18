import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of, lastValueFrom } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return lastValueFrom(of(PROMOTIONS).pipe(delay(2000)));
}

getPromotion(id: string) : Promise<Promotion> {
  return lastValueFrom(of(PROMOTIONS.filter((t) => (t.id === id))[0]).pipe(delay(2000)));
}

getFeaturedPromotion (): Promise<Promotion> {
  return lastValueFrom(of(PROMOTIONS.filter(d => d.featured)[0]).pipe(delay(2000)));
}
}