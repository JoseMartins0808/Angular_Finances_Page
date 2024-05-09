import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-register-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-transaction-form.component.html',
  styleUrl: './register-transaction-form.component.sass'
})
export class RegisterTransactionFormComponent {

  constructor(private readonly transactionService: TransactionService) { }

  public value = new FormControl<string>("");
  public type = new FormControl<"input" | "output">("input");
  public description = new FormControl<string>("");

  public onSubmit(event: Event) {
    event.preventDefault();

    const newData = {
      value: this.value.value as string,
      type: this.type.value as "input" | "output",
      description: this.description.value as string
    }

    this.transactionService.addTransaction(newData);

    this.value.setValue("");
    this.type.setValue("input");
    this.description.setValue("");
  }
}
