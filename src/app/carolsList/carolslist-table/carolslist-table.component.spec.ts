import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarolslistTableComponent } from './carolslist-table.component';

describe('CarolslistTableComponent', () => {
  let component: CarolslistTableComponent;
  let fixture: ComponentFixture<CarolslistTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarolslistTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarolslistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
