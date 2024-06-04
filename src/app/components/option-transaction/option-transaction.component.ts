import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-transaction.component.html',
  styleUrl: './option-transaction.component.sass'
})
export class OptionTransactionComponent {
  @Input() optionType!: "input" | "output";

  @Input() option!: string;

}
