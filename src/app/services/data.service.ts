import { Injectable } from '@angular/core';
import { cartItem } from '../cart-items/cart-item.model';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cartItems: cartItem[] = [
    {
      "itemImage": "https://loremflickr.com/320/240",
      "itemTitle": "Product 1",
      "itemDescription": "Description for Product 1",
      itemPrice : 2
    },
    {
      "itemImage": "https://loremflickr.com/320/240",
      "itemTitle": "Product 2",
      "itemDescription": "Description for Product 2",
      itemPrice:3
    },
    {
      "itemImage": "https://loremflickr.com/320/240",
      "itemTitle": "Product 3",
      "itemDescription": "Description for Product 3",
      itemPrice :1
    },
    {
      "itemImage": "https://loremflickr.com/320/240",
      "itemTitle": "Product 4",
      "itemDescription": "Description for Product 4",
      itemPrice:5
    },
    {
      "itemImage": "https://loremflickr.com/320/240",
      "itemTitle": "Product 5",
      "itemDescription": "Description for Product 5",
      itemPrice:10
    }
  ]
  

  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  constructor() { }

  getCartItems():cartItem[] {
    return this.cartItems;
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
