import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtBubbleComponent } from './thought-bubble.component';

describe('ThoughtBubbleComponent', () => {
  let component: ThoughtBubbleComponent;
  let fixture: ComponentFixture<ThoughtBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoughtBubbleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThoughtBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
