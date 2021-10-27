import { AfterViewInit, ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{

  myControl = new FormControl();
  options: string[] = ['Chennai', 'Salem', 'Coibatore'];

  private mediaSub: Subscription;
  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver
  ){}

  ngOnInit() {

    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        console.log(change.mqAlias);
        console.log(change.mediaQuery);
      }
    );

  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }

}
