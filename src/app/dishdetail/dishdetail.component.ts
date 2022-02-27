import { Component, OnInit, Inject} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { switchMap } from 'rxjs';
import { visibility, flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    visibility(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {

  dish: Dish | undefined;
  dishCopy: Dish | undefined;
  dishIds: string[] | any;
  prev: string | undefined;
  next: string | undefined;
  errMsg: string | any;
  visibility = 'shown';

  constructor(private dishService: DishService,
    @Inject('BaseURL') public baseURL: string,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.dishService.getDishIds().subscribe({next: dishIds => this.dishIds = dishIds,
      error: errmes => this.errMsg = <any>errmes});
    this.route.params.pipe(switchMap((params: Params) => 
      {this.visibility = 'hidden'; return this.dishService.getDish(params['id']);}))
      .subscribe({next: (dish) => 
        {this.dish = this.dishCopy = dish; this.setPrevNext(dish.id); this.visibility = 'shown';}, 
      error: errmes => this.errMsg = <any>errmes});
  }

  setPrevNext(dishId: string | any) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  goBack(): void {
    this.location.back();
  }
}
