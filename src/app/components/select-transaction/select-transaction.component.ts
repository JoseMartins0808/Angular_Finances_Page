import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { IChoseSearchTransaction, IChoseTransaction, transactionList } from "../../utils/transactions.utils";
import { OptionTransactionComponent } from '../option-transaction/option-transaction.component';

@Component({
  selector: 'app-select-transaction',
  standalone: true,
  imports: [CommonModule, OptionTransactionComponent],
  templateUrl: './select-transaction.component.html',
  styleUrl: './select-transaction.component.sass'
})
export class SelectTransactionComponent {

  private getSearchTransactionList(): IChoseSearchTransaction[] {
    let searchTransactionList: IChoseSearchTransaction[] = [];

    transactionList.map((option) => {
      searchTransactionList.push({
        ...option,
        firstString: "",
        searchString: "",
        lastString: ""
      });
    });
    return searchTransactionList;
  };

  @ViewChild("transactionInput") transactionSearch!: ElementRef;
  @ViewChild("selectContent") transactionMenu!: ElementRef;
  @Input() transactionOptions = this.getSearchTransactionList();


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
    let searchTransactionList: IChoseSearchTransaction[] = [];

    this.searchWord = this.transactionSearch.nativeElement.value.toLocaleLowerCase()
      .normalize("NFD").replace(/[^a-zA-Z\s]/g, "");

    const filterArray: IChoseTransaction[] = Array.from(transactionList).filter((transaction) =>
      transaction.select.toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")
        .includes(this.searchWord!.normalize("NFD").replace(/[^a-zA-Z\s]/g, "")));

    filterArray.map((option) => {
      let firstString: String = "";
      let lastString: String = "";

      if (this.searchWord!.length > 1) {

        if (this.searchWord![0] === option.select[0].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") && this.searchWord![1] === option.select[1].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
          lastString = option.select.slice(this.searchWord!.length, option.select.length);

        } else {
          for (let index: number = 0; index < option.select.length; index++) {

            if (this.searchWord![0] === option.select[index].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") && this.searchWord![1] === option.select[index + 1].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") && this.searchWord![2] === option.select[index + 2].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
              firstString = option.select.slice(0, index);
              lastString = option.select.slice(index + this.searchWord!.length, option.select.length);
              break;

            } else if (this.searchWord!.length === 2 && this.searchWord![0] === option.select[index].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") && this.searchWord![1] === option.select[index + 1].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
              firstString = option.select.slice(0, index);
              lastString = option.select.slice(index + this.searchWord!.length, option.select.length);
              break;
            }
          }
        }
      } else if (this.searchWord!.length === 1) {

        if (option.select[0].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") === this.searchWord![0]) {
          lastString = option.select.slice(1, option.select.length);

        } else {
          for (let index: number = 0; index < option.select.length; index++) {

            if (this.searchWord![0] === option.select[index].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
              firstString = option.select.slice(0, index);
              lastString = option.select.slice(index + 1, option.select.length);
              break;
            }
          }
        }
      } else {
        lastString = "";
      }

      const searchedOption: IChoseSearchTransaction = {
        ...option,
        firstString: firstString,
        searchString: this.searchWord!,
        lastString: lastString
      }

      searchTransactionList.push(searchedOption);
    });

    this.transactionOptions = searchTransactionList;
  }
}