import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of, Observable} from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  getPromotions(): Observable<Promotion[]> {
    //return of(PROMOTIONS).pipe(delay(2000));
    return this.http.get<Promotion[]>(baseURL + 'promotions');
}

getPromotion(id: string) : Observable<Promotion> {
  //return of(PROMOTIONS.filter((t) => (t.id === id))[0]).pipe(delay(2000));
  return this.http.get<Promotion>(baseURL + 'promotions/' + id);
}

getFeaturedPromotion (): Observable<Promotion> {
  //return of(PROMOTIONS.filter(d => d.featured)[0]).pipe(delay(2000));
  return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true')
      .pipe(map(promo => promo[0]));
}
}