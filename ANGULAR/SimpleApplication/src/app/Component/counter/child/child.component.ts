import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() count: number = 0; // Input from parent
  @Output() counterChange = new EventEmitter<number>(); // Emit changes to parent

  increment(): void {
    this.count++;
    this.counterChange.emit(this.count); // Emit updated count
  }

  decrement(): void {
    this.count--;
    this.counterChange.emit(this.count); // Emit updated count
  }
}
