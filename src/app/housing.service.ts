import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[]=[
    {
      id: 0,
      name: 'Luxury Apartments',
      city: 'Busia',
      state: 'BSA',
      photo: '/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'Tranquility Homes',
      city: 'Nairobi',
      state: 'NRB',
      photo: '/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Coast Beach Houses',
      city: 'Mombasa',
      state: 'BSA',
      photo: '/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Countryside Homes',
      city: 'Machacos',
      state: 'MSK',
      photo: '/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Ambience Apartments',
      city: 'Nakuru',
      state: 'NKR',
      photo: '/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Greeny Homes ',
      city: 'Kericho',
      state: 'KRC',
      photo: '/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Surburbia Penthouses',
      city: 'Kisumu',
      state: 'KSM',
      photo: '/assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Border Town Houses',
      city: 'Namanga',
      state: 'NMG',
      photo: '/assets/r-architecture-GGupkreKwxA-unsplash.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Island Holiday Homes',
      city: 'Malindi',
      state: 'MND',
      photo: '/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Lake Houses',
      city: 'Turkana',
      state: 'TKR',
      photo: '/assets/webaliser-_TPTXZd9mOo-unsplash.jpg',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ]

  constructor() { }
  getAllHousingLocations():HousingLocation[]{
    return this.housingLocationList;
  }

  getHousingLocationById(id:Number) : HousingLocation | undefined{
    return this.housingLocationList.find(housingLocation => housingLocation.id===id);
  }
}
