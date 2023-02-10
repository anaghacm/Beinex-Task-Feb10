import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcardBaseComponent } from './smallcard-base.component';

describe('SmallcardBaseComponent', () => {
  let component: SmallcardBaseComponent;
  let fixture: ComponentFixture<SmallcardBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcardBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallcardBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
