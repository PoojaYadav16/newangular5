import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationComponent } from './transportation.component';

describe('TransportationComponent', () => {
  let component: TransportationComponent;
  let fixture: ComponentFixture<TransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
