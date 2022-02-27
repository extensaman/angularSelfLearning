import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[] | undefined;
  errMsg: string | any;
  
  constructor(private dishService: DishService,
    @Inject('BaseURL') public baseURL: string) { }

  ngOnInit(): void {
    this.dishService.getDishes()
    .subscribe({next: (dishes) => this.dishes = dishes,
    error: errmes => this.errMsg = <any>errmes});
  }
}
