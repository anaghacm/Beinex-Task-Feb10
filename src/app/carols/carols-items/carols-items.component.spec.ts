import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarolsItemsComponent } from './carols-items.component';

describe('CarolsItemsComponent', () => {
  let component: CarolsItemsComponent;
  let fixture: ComponentFixture<CarolsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarolsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarolsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
