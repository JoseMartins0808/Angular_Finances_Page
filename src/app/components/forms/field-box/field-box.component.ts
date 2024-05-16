import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-field-box',
  standalone: true,
  imports: [],
  templateUrl: './field-box.component.html',
  styleUrl: './field-box.component.sass'
})
export class FieldBoxComponent {

  @Input() error!: ValidationErrors | null | undefined;

  isError() {
    return this.error ? "field-box error" : "field-box";
  }
}
