import { Component, OnInit, Inject } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  ceo: Leader[] | undefined;
  errMsg: string | any;
  
  constructor(private leaderService: LeaderService, 
    @Inject('BaseURL') public baseURL: string) { }

  ngOnInit(): void {
    this.leaderService.getLeaders()
    .subscribe({next: (leader) => this.ceo = leader,
    error: errmes => this.errMsg = <any>errmes}); 
  }

}
