import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationDashboardComponent } from './generation-dashboard.component';

describe('GenerationDashboardComponent', () => {
  let component: GenerationDashboardComponent;
  let fixture: ComponentFixture<GenerationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
