import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  numero: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  obterNumero(numero: number) {
    this.numero = numero;
  }

}
