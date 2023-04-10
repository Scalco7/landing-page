import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDowloadComponent } from './button-dowload.component';

describe('ButtonDowloadComponent', () => {
  let component: ButtonDowloadComponent;
  let fixture: ComponentFixture<ButtonDowloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDowloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDowloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
