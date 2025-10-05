import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-reset',
  templateUrl: './button-reset.component.html',
  styleUrls: ['./button-reset.component.css']
})
export class ButtonResetComponent {
  @Output() onReset = new EventEmitter<void>();

  resetGame(): void {
    this.onReset.emit();
  }

}
