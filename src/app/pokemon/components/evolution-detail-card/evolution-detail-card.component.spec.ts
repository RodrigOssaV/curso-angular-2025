import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionDetailCardComponent } from './evolution-detail-card.component';

describe('EvolutionDetailCardComponent', () => {
  let component: EvolutionDetailCardComponent;
  let fixture: ComponentFixture<EvolutionDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolutionDetailCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolutionDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
