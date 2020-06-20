import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GudetamaComponent } from './gudetama.component';

describe('GudetamaComponent', () => {
  let component: GudetamaComponent;
  let fixture: ComponentFixture<GudetamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GudetamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GudetamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
