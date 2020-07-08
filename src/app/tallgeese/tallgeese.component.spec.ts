import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallgeeseComponent } from './tallgeese.component';

describe('TallgeeseComponent', () => {
  let component: TallgeeseComponent;
  let fixture: ComponentFixture<TallgeeseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallgeeseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallgeeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
