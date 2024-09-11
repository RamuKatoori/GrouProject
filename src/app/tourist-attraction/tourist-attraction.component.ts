import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourist-attraction',
  templateUrl: './tourist-attraction.component.html',
  styleUrls: ['./tourist-attraction.component.css']
})
export class TouristAttractionComponent {
  attractions = [
    { name: 'Lakshadweep', img: 'assets/famous-tourist-attraction/lakshadweep.png', route: '/destination/lakshadweep' },
    { name: 'Andaman', img: 'assets/famous-tourist-attraction/andaman.png', route: '/destination/andaman' },
    { name: 'Kashmir', img: 'assets/famous-tourist-attraction/kashmir.png', route: '/destination/kashmir' },
    { name: 'Jaipur', img: 'assets/famous-tourist-attraction/jaipur.png', route: '/destination/jaipur' },
    { name: 'Bangalore', img: 'assets/famous-tourist-attraction/bangalore.png', route: '/destination/bangalore' },
    { name: 'Paris', img: 'assets/famous-tourist-attraction/paris.png', route: '/destination/paris' },
    { name: 'Leh', img: 'assets/famous-tourist-attraction/leh.png', route: '/destination/leh' },
    { name: 'Bali', img: 'assets/famous-tourist-attraction/bali.png', route: '/destination/bali' },
    { name: 'Dubai', img: 'assets/famous-tourist-attraction/dubai.png', route: '/destination/dubai' },
    { name: 'Kerala', img: 'assets/famous-tourist-attraction/kerala.png', route: '/destination/kerala' }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
