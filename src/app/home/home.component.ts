import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section>
   <form>
   <input type="text" placeholder= "filterByCity">
   <button class="primary" type="button"></button>
   </form>
   </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
