import { Injectable } from '@angular/core';
import { Supplement, SupplementType } from './supplement.model';
@Injectable({
  providedIn: 'root',
})
export class SupplementService {
  constructor() {}

  supplements: Supplement[] = [
    {
      name: 'Vitamin Deez Nuts',
      supplementType: SupplementType.Vitamin,
      containsLactose: false,
      isVegan: true,
      price: 10,
    },
    {
      name: 'Fish Oil OmegaLulz',
      supplementType: SupplementType.FishOil,
      containsLactose: false,
      isVegan: false,
      price: 20,
    },
    {
      name: 'Gold standard whey Protein',
      supplementType: SupplementType.Protein,
      containsLactose: false,
      isVegan: false,
      price: 30,
    },
    {
      name: 'Micronized Creatine',
      supplementType: SupplementType.Creatine,
      containsLactose: false,
      isVegan: false,
      price: 40,
    },
    {
      name: 'Red bull energy drink',
      supplementType: SupplementType.Other,
      containsLactose: false,
      isVegan: false,
      price: 50,
    },
    {
      name: 'DMAA insane crazy kill it PreWorkout',
      supplementType: SupplementType.PreWorkout,
      containsLactose: false,
      isVegan: false,
      price: 60,
    },
  ];

  getSupplements(): Supplement[] {
    return this.supplements;
  }
}
