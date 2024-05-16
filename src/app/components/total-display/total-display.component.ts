import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-total-display',
  standalone: true,
  imports: [],
  templateUrl: './total-display.component.html',
  styleUrl: './total-display.component.sass'
})
export class TotalDisplayComponent {
  constructor(private transactionService: TransactionService) { }

  public get total() {
    return this.transactionService.getTotalTransactionsValue();
  }

  public positiveOrNegative() {

    if (this.total >= 0)
      return "money blue";

    else
      return "money red";

  }
}
