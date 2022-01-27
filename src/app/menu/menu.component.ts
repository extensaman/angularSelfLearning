import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    // tslint:disable-next-line:max-line-length
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
  },
  {
    id: '1',
    name: 'Zuccipacoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: '',
    price: '1.99',
    // tslint:disable-next-line:max-line-length
    description: 'Deep fries Zuccini topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
  },
  {
    id: '2',
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'appetizer',
    featured: false,
    label: 'New',
    price: '1.99',
    // tslint:disable-next-line:max-line-length
    description: 'A quantssential topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
  },
  {
    id: '3',
    name: 'ElaiCheese Cake',
    image: '/assets/images/elaicheesecake.png',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    // tslint:disable-next-line:max-line-length
    description: 'A delictable semi-sweet topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  selectedDish: Dish = DISHES[0];
  
  constructor() { }

  ngOnInit(): void {
  }

}
