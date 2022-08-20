import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ngfor',
  templateUrl: './ng-if-ngfor.component.html',
  styleUrls: ['./ng-if-ngfor.component.css']
})
export class NgIfNgforComponent implements OnInit {

  numero: number = 1;
  arrNumeros = ["Felipe","Marcella","Floop",3,4,5,6,7,8,9,];

  constructor() { }

  ngOnInit(): void {
  }

  toNumber(numberText: string) : number {
    return parseInt(numberText);
  }

}
