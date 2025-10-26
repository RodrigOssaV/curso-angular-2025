import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeExpressInformationComponent } from './poke-express-information.component';

describe('PokeExpressInformationComponent', () => {
  let component: PokeExpressInformationComponent;
  let fixture: ComponentFixture<PokeExpressInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeExpressInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeExpressInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
