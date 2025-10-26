import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTypesComponent } from './poke-types.component';

describe('PokeTypesComponent', () => {
  let component: PokeTypesComponent;
  let fixture: ComponentFixture<PokeTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
