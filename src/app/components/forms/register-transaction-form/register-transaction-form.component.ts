import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../../../error/error/error.component';
import { FieldBoxComponent } from '../field-box/field-box.component';

@Component({
  selector: 'app-register-transaction-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FieldBoxComponent, ErrorComponent],
  templateUrl: './register-transaction-form.component.html',
  styleUrl: './register-transaction-form.component.sass'
})
export class RegisterTransactionFormComponent {

  constructor(private readonly transactionService: TransactionService) { }

  // public disableSubmit: "true" | "false" = "true";

  public financesForm = new FormGroup({
    value: new FormControl<string>("", [Validators.required]),
    type: new FormControl<"input" | "output">("input"),
    description: new FormControl<string>("", [Validators.required, Validators.minLength(5)])
  });

  public get errors() {

    return {
      value: this.financesForm.get("value")?.errors,
      description: this.financesForm.get("description")?.errors
    }
  }

  public onSubmit(event: Event): void {
    event.preventDefault();

    const newData = {
      value: this.financesForm.get("value")?.value as string,
      type: this.financesForm.get("type")?.value as "input" | "output",
      description: this.financesForm.get("description")?.value as string
    }

    this.transactionService.addTransaction(newData);
  }

  public handleDisableButton(): boolean {
    if (this.financesForm.valid) {
      return false;
    } else {
      return true;
    }
  }

  public handleDisableButtonStyle(): string {
    if (this.financesForm.valid) {
      return "btn solid md";
    } else {
      return "btn disabled md";
    }
  }
}
