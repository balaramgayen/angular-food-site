import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  constructor() {}

  // fooddetails

  foodDetails = [
    {
      id: 1,
      foodName: 'Paneer Grilled Sandwich',
      foodDetails: 'Pan-fried masala paneer.',
      foodPrice: 200,
      foodImg:
        'https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=80',
    },
    {
      id: 2,
      foodName: 'Veggie Supreme',
      foodDetails:
        'Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese',
      foodPrice: 369,
      foodImg:
        'https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 3,
      foodName: 'Paneer Burger',
      foodDetails: 'panner',
      foodPrice: 149,
      foodImg:
        'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80',
    },
    {
      id: 4,
      foodName: 'Veg Masala Roll In Naan',
      foodDetails:
        "A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice: 140,
      foodImg:
        'https://images.unsplash.com/photo-1613435392866-f81bf4cf1bbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80',
    },
    {
      id: 5,
      foodName: 'Indulgence Brownie',
      foodDetails:
        '(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.',
      foodPrice: 105,
      foodImg:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv',
    },
    {
      id: 6,
      foodName: 'Oreo Cheesecake Ice Cream',
      foodDetails: 'Oreo ice cream',
      foodPrice: 219,
      foodImg:
        'https://images.unsplash.com/photo-1607920591413-4ec007e70023?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
    },
  ];
}
