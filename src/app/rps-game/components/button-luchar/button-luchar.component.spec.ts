import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLucharComponent } from './button-luchar.component';

describe('ButtonLucharComponent', () => {
  let component: ButtonLucharComponent;
  let fixture: ComponentFixture<ButtonLucharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLucharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLucharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
