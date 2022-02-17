import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getLeader(id: string) : Promise<Leader> {
    return Promise.resolve(LEADERS.filter((t) => (t.id === id))[0]);
  }

  getFeaturedLeader (): Promise<Leader> {
    return Promise.resolve(LEADERS.filter(d => d.featured)[0]);
  }
}
