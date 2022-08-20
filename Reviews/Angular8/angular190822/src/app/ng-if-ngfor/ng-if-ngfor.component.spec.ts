import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfNgforComponent } from './ng-if-ngfor.component';

describe('NgIfNgforComponent', () => {
  let component: NgIfNgforComponent;
  let fixture: ComponentFixture<NgIfNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfNgforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
