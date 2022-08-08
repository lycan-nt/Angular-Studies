import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: '<h1>Bora dominar o mundo</h1>',
  styles: ['h1 { color: tomato }']
})
export class NewComponentComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }

}
