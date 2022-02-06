import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(id: string) : Leader {
    return LEADERS.filter((t) => (t.id === id))[0];
  }

  getFeaturedLeader (): Leader {
    return LEADERS.filter(d => d.featured)[0];
  }
}
