import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IChoseSearchTransaction, IChoseTransaction } from '../../utils/transactions.utils';
import { RegisterTransactionFormComponent } from '../forms/register-transaction-form/register-transaction-form.component';
import { SelectTransactionComponent } from '../select-transaction/select-transaction.component';

@Component({
  selector: 'app-option-transaction',
  standalone: true,
  imports: [CommonModule, RegisterTransactionFormComponent],
  templateUrl: './option-transaction.component.html',
  styleUrl: './option-transaction.component.sass'
})
export class OptionTransactionComponent {

  @Input() option!: IChoseSearchTransaction;

  constructor(private registerTransaction: RegisterTransactionFormComponent,
    private selectTransactionComponent: SelectTransactionComponent
  ) { }

  public optionChosen: IChoseTransaction = {
    description: "",
    select: "",
    type: "input"
  };

  public setOptionChoiced(optionChoiced: IChoseTransaction) {

    this.selectTransactionComponent.toggleSelectDropDown();
    this.selectTransactionComponent.changeSelectedItem(optionChoiced.select);

    this.optionChosen = optionChoiced;

    this.registerTransaction.textArea.nativeElement.value = optionChoiced.description;
    this.registerTransaction.textArea.nativeElement.toched;
    this.registerTransaction.textArea.nativeElement.dirty;

    console.log(optionChoiced);

    if (optionChoiced.type === "input") {
      this.registerTransaction.setInputTransaction();
    } else {
      this.registerTransaction.setOutputTransaction();
    }
  }
}