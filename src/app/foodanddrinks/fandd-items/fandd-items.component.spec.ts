import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanddItemsComponent } from './fandd-items.component';

describe('FanddItemsComponent', () => {
  let component: FanddItemsComponent;
  let fixture: ComponentFixture<FanddItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanddItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
