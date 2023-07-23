import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgDetailsComponent } from './clg-details.component';

describe('ClgDetailsComponent', () => {
  let component: ClgDetailsComponent;
  let fixture: ComponentFixture<ClgDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClgDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
