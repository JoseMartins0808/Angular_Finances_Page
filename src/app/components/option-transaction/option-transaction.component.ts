import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IChoseTransaction } from '../../utils/transactions.utils';
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

  @Input() option!: IChoseTransaction;
  @Input() searchString!: String | null;

  public firstString: String = "";
  public lastString: String = "";

  constructor(private registerTransaction: RegisterTransactionFormComponent,
    selectTransaction: SelectTransactionComponent
  ) {

    this.searchString = selectTransaction.searchWord!;

    if (this.searchString !== null) {
      if (this.searchString[0].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") ===
        this.option.select[0].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") &&
        this.searchString[1].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") ===
        this.option.select[1].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {

        this.lastString = this.option.select.slice(this.searchString.length, this.option.select.length);
      }
    }


    // if (searchWord[0] === option[0] && searchWord[1] === option[1]) {
    //   lastString = option.slice(searchWord.length, option.length);

    // } else {
    //     for (let index = 0; index < option.length; index++) {
    //         if (searchWord[0] === option[index] && searchWord[1] === option[index + 1] && searchWord[2] === option[index + 2]) {

    //             firstString = option.slice(0, index);
    //             lastString = option.slice(index + searchWord.length, option.length);
    //         }
    //     }
    // }
  }


  public optionChosen: IChoseTransaction = {
    description: "",
    select: "",
    type: "input"
  };

  public setOptionChoiced(optionChoiced: IChoseTransaction) {
    this.optionChosen = optionChoiced;

    this.registerTransaction.textArea.nativeElement.value = optionChoiced.description;
    this.registerTransaction.textArea.nativeElement.toched;
    this.registerTransaction.textArea.nativeElement.dirty;
  }
}