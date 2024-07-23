import { Component, Input } from '@angular/core';
import { ITransaction } from '../../interfaces/transaction.interfaces';
import { TransactionService } from '../../services/transaction.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.sass'
})
export class TransactionCardComponent {
  constructor(private transactionService: TransactionService) { }

  @Input() transaction!: ITransaction;

  public valueToMoney() {
    return Number(this.transaction.value).toLocaleString("pt-BR", { currency: "BRL", style: "currency" })
  }

  public deleteTransaction() {
    this.transactionService.removeTransaction(this.transaction.id);
  }

  public showTransaction() {
    console.log(this.transaction);
  }
}
