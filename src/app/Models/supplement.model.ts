export enum SupplementType {
    Vitamin = "vitamin",
    FishOil = 'fishOil',
    Protein = 'protein',
    Creatine = "creatine",
    Other = 'other',
    PreWorkout =  'preWorkout',
}

export class Supplement {
    name : string = '';
    supplementType : SupplementType = SupplementType.Other;
    containsLactose : boolean = false; 
    isVegan : boolean = false;
    price : number = 0;
    constructor(
        name : string,
        supplementType : SupplementType,
        containsLactose : boolean,
        isVegan : boolean,
        price : number
    ) {
        this.name = name;
        this.supplementType = supplementType;
        this.containsLactose = containsLactose;
        this.isVegan = isVegan;
        this.price = price;
     }
        
    }
