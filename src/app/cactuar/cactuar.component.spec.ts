import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CactuarComponent } from './cactuar.component';

describe('CactuarComponent', () => {
  let component: CactuarComponent;
  let fixture: ComponentFixture<CactuarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CactuarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CactuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
