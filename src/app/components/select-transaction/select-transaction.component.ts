import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IChoseTransaction, transactionList } from "../../utils/transactions.utils";

@Component({
  selector: 'app-select-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-transaction.component.html',
  styleUrl: './select-transaction.component.sass'
})
export class SelectTransactionComponent {
  @ViewChild("transactionInput") transactionSearch!: ElementRef;

  @Input() transactionOptions: IChoseTransaction[] = transactionList;

  public openedSelectMenu: boolean = false;

  public toggleSelectDropDown(): void {
    this.openedSelectMenu = !this.openedSelectMenu;
  }

  private filterFields() {
    const filterArray = Array.from(transactionList).filter((transaction) =>
      transaction.select.toLocaleLowerCase().includes(
        this.transactionSearch.nativeElement.value.toLocaleLowerCase()
      ));

    this.transactionOptions = filterArray;
  }
}
