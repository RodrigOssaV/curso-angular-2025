import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() buttonClass: string = '';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<void>();
}
