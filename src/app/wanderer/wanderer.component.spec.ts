import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WandererComponent } from './wanderer.component';

describe('WandererComponent', () => {
  let component: WandererComponent;
  let fixture: ComponentFixture<WandererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WandererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WandererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
