import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { IChoseTransaction, transactionList } from "../../utils/transactions.utils";
import { OptionTransactionComponent } from '../option-transaction/option-transaction.component';

@Component({
  selector: 'app-select-transaction',
  standalone: true,
  imports: [CommonModule, OptionTransactionComponent],
  templateUrl: './select-transaction.component.html',
  styleUrl: './select-transaction.component.sass'
})
export class SelectTransactionComponent {
  @ViewChild("transactionInput") transactionSearch!: ElementRef;

  @Input() transactionOptions: IChoseTransaction[] = transactionList;

  public openedSelectMenu: boolean = false;

  public searchWord: string | null = null;

  public toggleSelectDropDown(): void {
    this.openedSelectMenu = !this.openedSelectMenu;
  }

  public filterFields() {

    this.searchWord = this.transactionSearch.nativeElement.value.toLocaleLowerCase();

    const filterArray = Array.from(transactionList).filter((transaction) =>
      transaction.select.toLocaleLowerCase().includes(
        this.searchWord!
      ));

    this.transactionOptions = filterArray;

    console.log(this.transactionOptions)
  }

}
