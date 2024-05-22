import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { transactionList } from "../../utils/transactions.utils";

@Component({
  selector: 'app-select-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-transaction.component.html',
  styleUrl: './select-transaction.component.sass'
})
export class SelectTransactionComponent {

  @Input() transactionOptions = transactionList;

  public openedSelectMenu: "select-content" | "select-content active" = "select-content";

  public toggleSelectDropDown() {
    if (this.openedSelectMenu === "select-content") {
      this.openedSelectMenu = "select-content active";
    } else {
      this.openedSelectMenu = "select-content";
    }
  }
}
