import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../../../error/error/error.component';
import { FieldBoxComponent } from '../field-box/field-box.component';
import { SelectTransactionComponent } from '../../select-transaction/select-transaction.component';
import { ICreateTransaction } from '../../../interfaces/transaction.interfaces';

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

  public transactionTypeSelect: "input" | "output" = "input";
  public openedTypeMenu: boolean = false;
  public transactionDesciption: string = "";
  public isAnyTransaction: boolean = true;
  public optionSelected: string = "Outros (livre)";

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

    const newData: ICreateTransaction = {
      value: this.financesForm.get("value")?.value as string,
      type: this.transactionTypeSelect,
      option: this.optionSelected,
      datetime: new Date().toLocaleString(),
      description: this.transactionDesciption
    }

    console.log(newData);
    this.transactionService.addTransaction(newData);
  }

  public handleDisableButton(): boolean {
    if (this.isAnyTransaction) {
      return this.financesForm.valid ? false : true;
    } else {
      return false;
    }
  }

  public handleDisableButtonStyle(): "btn disabled md" | "btn solid md" {
    if (this.isAnyTransaction) {
      return this.financesForm.valid ? "btn solid md" : "btn disabled md";
    } else {
      return "btn solid md";
    }
  }

  public toggleOpenTypeMenu(): void {
    this.openedTypeMenu === true ? this.openedTypeMenu = false : this.openedTypeMenu = true;
  }

  public handleChangeTypeMenu(): "Entrada" | "Saída" {
    return this.transactionTypeSelect === "input" ? "Entrada" : "Saída";
  }

  public handleChangeIconMenu(): "stat_minus_1" | "stat_1" {
    return this.openedTypeMenu ? "stat_1" : "stat_minus_1";
  }

  public setInputTransaction(): void {
    this.transactionTypeSelect = "input";
    if (this.openedTypeMenu === true)
      this.openedTypeMenu = false;
  }

  public setOutputTransaction(): void {
    this.transactionTypeSelect = "output";
    if (this.openedTypeMenu === true)
      this.openedTypeMenu = false;
  }

  public handleTransactionDescription() {
    this.transactionDesciption = this.textArea.nativeElement.value;
  }
}