import { Component, Input } from '@angular/core';
import { RestaurantDetailsComponent } from "./restaurant-details/restaurant-details.component";
import { UnasignedItemsComponent } from "./unasigned-items/unasigned-items.component";
import { CuentaComponent } from "./cuenta/cuenta.component";
import { AsignedItemsComponent } from './asigned-items/asigned-items.component';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [RestaurantDetailsComponent, UnasignedItemsComponent, CuentaComponent, AsignedItemsComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.sass'
})
export class RoomComponent {
  constructor() {
    console.log('myCustomComponent');
  }
  @Input() username : string;
}
