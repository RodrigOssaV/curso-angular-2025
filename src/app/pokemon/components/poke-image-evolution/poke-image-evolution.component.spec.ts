import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeImageEvolutionComponent } from './poke-image-evolution.component';

describe('PokeImageEvolutionComponent', () => {
  let component: PokeImageEvolutionComponent;
  let fixture: ComponentFixture<PokeImageEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeImageEvolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeImageEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
