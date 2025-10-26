import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoClimaComponent } from './icono-clima.component';

describe('IconoClimaComponent', () => {
  let component: IconoClimaComponent;
  let fixture: ComponentFixture<IconoClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconoClimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconoClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
