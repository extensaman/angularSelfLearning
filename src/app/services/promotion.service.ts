import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of, Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    //return of(PROMOTIONS).pipe(delay(2000));
    return this.http.get<Promotion[]>(baseURL + 'promotions')
    .pipe(catchError(this.processHTTPMsgService.handleError));
}

getPromotion(id: string) : Observable<Promotion> {
  //return of(PROMOTIONS.filter((t) => (t.id === id))[0]).pipe(delay(2000));
  return this.http.get<Promotion>(baseURL + 'promotions/' + id)
  .pipe(catchError(this.processHTTPMsgService.handleError));
}

getFeaturedPromotion (): Observable<Promotion> {
  //return of(PROMOTIONS.filter(d => d.featured)[0]).pipe(delay(2000));
  return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true')
      .pipe(map(promo => promo[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
}
}