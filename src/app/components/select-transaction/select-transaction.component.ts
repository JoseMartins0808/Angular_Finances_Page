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
  @ViewChild("selectBar") selectBar!: ElementRef;
  // @ViewChild("dropDownIcon") dropDownIcon!: ElementRef;
  // @ViewChild("dropUpIcon") dropUpIcon!: ElementRef;
  @Input() transactionOptions = this.getSearchTransactionList();

  constructor(private renderer: Renderer2) {

    this.renderer.listen("window", "click", (event: Event) => {

      if (this.openedSelectMenu === true) {

        if (!this.transactionMenu.nativeElement.contains(event.target) && !this.selectBar.nativeElement.contains(event.target)) {
          // if (this.dropDownIcon.nativeElement.contains(event.target)) {
          //   console.log("CLOSE!")
          // }

          this.openedSelectMenu = false;
        }

      }


      if (this.selectBar.nativeElement.contains(event.target)) {
        console.log("DRENTO")
      }
    });
  }
  public openedSelectMenu: boolean = false;

  public searchWord: string | null = null;

  public toggleSelectDropDown(): void {
    this.openedSelectMenu = !this.openedSelectMenu;
    console.log("TOGGLE!")
  }

  public toggleSelectDropDownIcon(): "stat_1" | "stat_minus_1" {
    return this.openedSelectMenu ? "stat_1" : "stat_minus_1";
  };

  public selectedItem: String = "Selecione uma Transação";

  public changeSelectedItem(newSelectedItem: String): void {
    this.selectedItem = newSelectedItem;
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
      let searchString: String = "";
      let lastString: String = "";

      if (this.searchWord!.length > 1) {

        if (this.searchWord![0] === option.select[0].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") && this.searchWord![1] === option.select[1].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
          lastString = option.select.slice(this.searchWord!.length, option.select.length);
          searchString = option.select.slice(0, this.searchWord!.length);

        } else if (this.searchWord!.length === 2 && this.searchWord![0] === option.select[option.select.length - 2].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") && this.searchWord![1] === option.select[option.select.length - 1].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
          firstString = option.select.slice(0, option.select.length - 2);
          searchString = option.select.slice(option.select.length - 2, option.select.length);

        } else {
          for (let index: number = 0; index < option.select.length; index++) {

            if (this.searchWord![0] === option.select[index].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") && this.searchWord![1] === option.select[index + 1].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") && this.searchWord![2] === option.select[index + 2].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
              firstString = option.select.slice(0, index);
              searchString = option.select.slice(index, index + this.searchWord!.length);
              lastString = option.select.slice(index + this.searchWord!.length, option.select.length);
              break;

            } else if (this.searchWord!.length === 2 && this.searchWord![0] === option.select[index].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") && this.searchWord![1] === option.select[index + 1].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
              firstString = option.select.slice(0, index);
              searchString = option.select.slice(index, index + this.searchWord!.length);
              lastString = option.select.slice(index + this.searchWord!.length, option.select.length);
              break;
            }
          }
        }

      } else if (this.searchWord!.length === 1) {

        if (option.select[0].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "") === this.searchWord![0]) {
          lastString = option.select.slice(1, option.select.length);
          searchString = option.select.slice(0, 1);

        } else {
          for (let index: number = 0; index < option.select.length; index++) {

            if (this.searchWord![0] === option.select[index].toLocaleLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
              firstString = option.select.slice(0, index);
              searchString = option.select.slice(index, index + 1);
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
        firstString,
        searchString,
        lastString
      }

      searchTransactionList.push(searchedOption);
    });

    this.transactionOptions = searchTransactionList;
  }
}