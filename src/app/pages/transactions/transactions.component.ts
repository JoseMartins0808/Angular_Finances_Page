import { Component } from '@angular/core';
import { RegisterTransactionFormComponent } from '../../components/forms/register-transaction-form/register-transaction-form.component';
import { TotalDisplayComponent } from '../../components/total-display/total-display.component';
import { TransactionCardComponent } from '../../components/transaction-card/transaction-card.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [RegisterTransactionFormComponent, TotalDisplayComponent, TransactionCardComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.sass'
})
export class TransactionsComponent {

}
