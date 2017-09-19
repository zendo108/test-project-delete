import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }

  cars = [
    'ford','chevy','buick'
  ];

  myCars(){
    return 'this is my data';
  }
}
