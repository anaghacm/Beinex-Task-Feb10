import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarolslistHomeComponent } from './carolslist-home.component';

describe('CarolslistHomeComponent', () => {
  let component: CarolslistHomeComponent;
  let fixture: ComponentFixture<CarolslistHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarolslistHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarolslistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
