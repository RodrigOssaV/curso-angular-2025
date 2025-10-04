import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoJuegoComponent } from './resultado-juego.component';

describe('ResultadoJuegoComponent', () => {
  let component: ResultadoJuegoComponent;
  let fixture: ComponentFixture<ResultadoJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoJuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
