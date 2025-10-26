import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAbilityDetailComponent } from './poke-ability-detail.component';

describe('PokeAbilityDetailComponent', () => {
  let component: PokeAbilityDetailComponent;
  let fixture: ComponentFixture<PokeAbilityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeAbilityDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeAbilityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
