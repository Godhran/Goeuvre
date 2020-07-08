import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvayComponent } from './solvay.component';

describe('SolvayComponent', () => {
  let component: SolvayComponent;
  let fixture: ComponentFixture<SolvayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolvayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolvayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
