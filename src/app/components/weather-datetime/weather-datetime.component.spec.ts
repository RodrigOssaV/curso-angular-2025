import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDatetimeComponent } from './weather-datetime.component';

describe('WeatherDatetimeComponent', () => {
  let component: WeatherDatetimeComponent;
  let fixture: ComponentFixture<WeatherDatetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDatetimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
