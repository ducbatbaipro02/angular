import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIFeatureComponent } from './uifeature.component';

describe('UIFeatureComponent', () => {
  let component: UIFeatureComponent;
  let fixture: ComponentFixture<UIFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
