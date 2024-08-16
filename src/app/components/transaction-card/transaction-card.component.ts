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

  @Input() transaction!: ITransaction;
  public transactionTime: string = "";
  public transactionDate: string = "";

  constructor(private transactionService: TransactionService) {

    setTimeout(() => {

      this.transactionDate = this.getTransactionDate(this.transaction.datetime);

      this.transactionTime = this.transaction.datetime.slice(12, this.transaction.datetime.length);
    }, 0);
  }


  private getTransactionDate(dateTime: string): string {

    const day: string = dateTime.slice(0, 2);
    const month: string = dateTime.slice(3, 5);
    const year: string = dateTime.slice(6, 10);
    let monthSpell: string = "";

    if (month === "01") {
      monthSpell = "Janeiro";
    } else if (month === "02") {
      monthSpell = "Fevereiro";
    } else if (month === "03") {
      monthSpell = "Março";
    } else if (month === "04") {
      monthSpell = "Abril";
    } else if (month === "05") {
      monthSpell = "Maio";
    } else if (month === "06") {
      monthSpell = "Junho";
    } else if (month === "07") {
      monthSpell = "Julho";
    } else if (month === "08") {
      monthSpell = "Agosto";
    } else if (month === "09") {
      monthSpell = "Setembro";
    } else if (month === "10") {
      monthSpell = "Outubro";
    } else if (month === "11") {
      monthSpell = "Novembro";
    } else {
      monthSpell = "Dezembro";
    }

    return day + " de " + monthSpell + " de " + year;
  }

  public valueToMoney(): string {
    return Number(this.transaction.value).toLocaleString("pt-BR", { currency: "BRL", style: "currency" })
  }

  public deleteTransaction(): void {
    this.transactionService.removeTransaction(this.transaction.id);
  }



  public showTransaction(): void {
    console.log(this.transaction);
  }

  public handleStylingCard(): "flex-box input" | "flex-box output" {

    return this.transaction.type === "input" ? "flex-box input" : "flex-box output";
  }
}
