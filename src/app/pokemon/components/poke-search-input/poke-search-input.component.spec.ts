import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSearchInputComponent } from './poke-search-input.component';

describe('PokeSearchInputComponent', () => {
  let component: PokeSearchInputComponent;
  let fixture: ComponentFixture<PokeSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeSearchInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
