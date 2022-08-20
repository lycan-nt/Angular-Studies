import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text: String = "0";

  constructor() { }

  ngOnInit(): void {
  }

  obterNumero(numero: String) {
    this.text =  numero;
  }

}
