import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarolsHomeComponent } from './carols-home.component';

describe('CarolsHomeComponent', () => {
  let component: CarolsHomeComponent;
  let fixture: ComponentFixture<CarolsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarolsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarolsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
