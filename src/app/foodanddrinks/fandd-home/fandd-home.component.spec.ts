import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanddHomeComponent } from './fandd-home.component';

describe('FanddHomeComponent', () => {
  let component: FanddHomeComponent;
  let fixture: ComponentFixture<FanddHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanddHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanddHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
