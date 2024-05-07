import { Component } from '@angular/core';
import { RegisterTransactionFormComponent } from '../../components/forms/register-transaction-form/register-transaction-form.component';
import { TotalDisplayComponent } from '../../components/total-display/total-display.component';
import { TransactionCardComponent } from '../../components/transaction-card/transaction-card.component';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, RegisterTransactionFormComponent, TotalDisplayComponent, TransactionCardComponent],
  providers: [TransactionService],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.sass'
})
export class TransactionsComponent {

  constructor(private readonly transactionService: TransactionService) { };

  get transactionList() {
    return this.transactionService.getTransactionList();
  }
}
