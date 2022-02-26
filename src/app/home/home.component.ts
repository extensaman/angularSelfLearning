import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish | undefined;
  promotion: Promotion | undefined;
  leader: Leader | undefined;
  errMsgDish: string | any;
  errMsgPromotion: string | any;
  errMsgLeader: string | any;

  constructor(private dishService: DishService, 
    @Inject('BaseURL') public baseURL: string,
    private promotionService: PromotionService,
    private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish()
    .subscribe({next: (dish) => this.dish = dish,
      error: errmes => this.errMsgDish = <any>errmes});
    
      this.promotionService.getFeaturedPromotion()
    .subscribe({next: (promotion) => this.promotion = promotion,
      error: errmes => this.errMsgPromotion = <any>errmes});
    
      this.leaderService.getFeaturedLeader()
      .subscribe({next: (leader) => this.leader = leader,
        error: errmes => this.errMsgLeader = <any>errmes});
  }

}
