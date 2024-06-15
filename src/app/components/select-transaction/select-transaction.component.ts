import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild("selectContent") transactionMenu!: ElementRef;
  @Input() transactionOptions: IChoseTransaction[] = transactionList;


  constructor(private renderer: Renderer2) {

    let count: number = 0;

    this.renderer.listen("window", "click", (e: Event) => {

      if (this.openedSelectMenu === true) {

        if (!this.transactionMenu.nativeElement.contains(e.target)) {
          count = count + 1;

          if (count === 2) {
            this.toggleSelectDropDown();
            count = 0;
          }
        }
      }
    });
  }

  public openedSelectMenu: boolean = false;

  public searchWord: string | null = null;

  public toggleSelectDropDown(): void {
    this.openedSelectMenu = !this.openedSelectMenu;
  }

  public filterFields(): void {

    this.searchWord = this.transactionSearch.nativeElement.value.toLocaleLowerCase();

    const filterArray = Array.from(transactionList).filter((transaction) =>
      transaction.select.toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")
        .includes(this.searchWord!.normalize("NFD").replace(/[^a-zA-Z\s]/g, "")));

    this.transactionOptions = filterArray;
  }
}
