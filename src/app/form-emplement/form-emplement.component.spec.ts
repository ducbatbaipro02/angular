import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmplementComponent } from './form-emplement.component';

describe('FormEmplementComponent', () => {
  let component: FormEmplementComponent;
  let fixture: ComponentFixture<FormEmplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
