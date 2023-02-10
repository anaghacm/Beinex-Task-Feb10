import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionItemsComponent } from './tradition-items.component';

describe('TraditionItemsComponent', () => {
  let component: TraditionItemsComponent;
  let fixture: ComponentFixture<TraditionItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraditionItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraditionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
