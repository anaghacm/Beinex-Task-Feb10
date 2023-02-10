import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionHomeComponent } from './tradition-home.component';

describe('TraditionHomeComponent', () => {
  let component: TraditionHomeComponent;
  let fixture: ComponentFixture<TraditionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraditionHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraditionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
