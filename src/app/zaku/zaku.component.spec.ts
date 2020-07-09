import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakuComponent } from './zaku.component';

describe('ZakuComponent', () => {
  let component: ZakuComponent;
  let fixture: ComponentFixture<ZakuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
