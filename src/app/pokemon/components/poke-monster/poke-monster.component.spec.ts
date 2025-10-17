import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeMonsterComponent } from './poke-monster.component';

describe('PokeMonsterComponent', () => {
  let component: PokeMonsterComponent;
  let fixture: ComponentFixture<PokeMonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeMonsterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
