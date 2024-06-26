import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../../../error/error/error.component';
import { FieldBoxComponent } from '../field-box/field-box.component';
import { SelectTransactionComponent } from '../../select-transaction/select-transaction.component';

@Component({
  selector: 'app-register-transaction-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FieldBoxComponent, ErrorComponent, SelectTransactionComponent],
  templateUrl: './register-transaction-form.component.html',
  styleUrl: './register-transaction-form.component.sass'
})
export class RegisterTransactionFormComponent {

  @ViewChild("textArea") textArea!: ElementRef;
  @ViewChild("transactionType") transactionType!: ElementRef;

  public transactionSelect: "input" | "output" = "input";
  public openedTypeMenu: boolean = false;

  constructor(private readonly transactionService: TransactionService,
    private renderer: Renderer2) {

    this.renderer.listen("window", "click", (event: Event) => {
      if (this.openedTypeMenu === true) {
        if (!this.transactionType.nativeElement.contains(event.target)) {
          this.openedTypeMenu = false;
        }
      }
    });
  }

  public financesForm = new FormGroup({
    value: new FormControl<string>("", [Validators.required]),
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
      type: this.transactionSelect,
      description: this.financesForm.get("description")?.value as string
    }

    this.transactionService.addTransaction(newData);
  }

  public handleDisableButton(): boolean {
    return this.financesForm.valid ? false : true;
  }

  public handleDisableButtonStyle(): "btn disabled md" | "btn solid md" {
    return this.financesForm.valid ? "btn solid md" : "btn disabled md";
  }

  public toggleOpenTypeMenu(): void {
    this.openedTypeMenu === true ? this.openedTypeMenu = false : this.openedTypeMenu = true;
  }

  public handleChangeTypeMenu(): "Entrada" | "Saída" {
    return this.transactionSelect === "input" ? "Entrada" : "Saída";
  }

  public setInputTransaction(): void {
    this.transactionSelect = "input";
    if (this.openedTypeMenu === true)
      this.openedTypeMenu = false;
  }

  public setOutputTransaction(): void {
    this.transactionSelect = "output";
    if (this.openedTypeMenu === true)
      this.openedTypeMenu = false;
  }
}