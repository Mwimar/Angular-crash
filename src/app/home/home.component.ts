import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
   <section>
   <form>
   <input type="text" placeholder= "filterByCity">
   <button class="primary" type="button">search</button>
   </form>
   </section>

   <section class="results">
   <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
   </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList:HousingLocation[] =[
    {
      "id":0,
      "name": "Commfort Homes",
      "city": "Nairobi",
      "state": "NRB",
      "photo": "/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
      "availableUnits":4,
      "wifi": true,
      "laundry": true,
    },
    {
      "id":1,
      "name": "Beach House",
      "city": "Mombasa",
      "state": "MSA",
      "photo": "/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
      "availableUnits":2,
      "wifi": true,
      "laundry": true,
    },
    {
      "id":3,
      "name": "Luxury Apartments",
      "city": "Busia",
      "state": "BSA",
      "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "availableUnits":10,
      "wifi": true,
      "laundry": true,
    }
  ]

}
