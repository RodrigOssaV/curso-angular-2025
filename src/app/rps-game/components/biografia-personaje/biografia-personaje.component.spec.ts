import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografiaPersonajeComponent } from './biografia-personaje.component';

describe('BiografiaPersonajeComponent', () => {
  let component: BiografiaPersonajeComponent;
  let fixture: ComponentFixture<BiografiaPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiografiaPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiografiaPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
