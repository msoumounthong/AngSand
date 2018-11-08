import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwgetComponent } from './swget.component';

describe('SwgetComponent', () => {
  let component: SwgetComponent;
  let fixture: ComponentFixture<SwgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
