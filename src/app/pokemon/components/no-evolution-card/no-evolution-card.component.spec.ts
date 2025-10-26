import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEvolutionCardComponent } from './no-evolution-card.component';

describe('NoEvolutionCardComponent', () => {
  let component: NoEvolutionCardComponent;
  let fixture: ComponentFixture<NoEvolutionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEvolutionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoEvolutionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
