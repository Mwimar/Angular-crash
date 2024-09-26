import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listingImage">
      <h2 class="listingHeading"></h2>

</section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

}
