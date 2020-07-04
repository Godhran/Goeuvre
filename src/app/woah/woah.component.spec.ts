import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoahComponent } from './woah.component';

describe('WoahComponent', () => {
  let component: WoahComponent;
  let fixture: ComponentFixture<WoahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
