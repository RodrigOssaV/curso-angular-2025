import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionDetailDualCardComponent } from './evolution-detail-dual-card.component';

describe('EvolutionDetailDualCardComponent', () => {
  let component: EvolutionDetailDualCardComponent;
  let fixture: ComponentFixture<EvolutionDetailDualCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolutionDetailDualCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolutionDetailDualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
