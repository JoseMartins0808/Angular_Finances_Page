import { Injectable, computed, signal } from "@angular/core";
import { ICreateTransaction, ITransaction } from "../interfaces/transaction.interfaces";

@Injectable({ providedIn: "root" })
export class TransactionService {

    private readonly transactionList = signal<ITransaction[]>([]);

    private readonly totalTransactionsValue = computed(() => this.transactionList()
        .reduce((previousValue, currentvalue) => {

            if (currentvalue.type === "input") {
                return previousValue + Number(currentvalue.value);

            } else {
                return previousValue - Number(currentvalue.value);
            }
        }, 0));

    public getTransactionList() {

        return this.transactionList();
    }

    public getTotalTransactionsValue() {

        return this.totalTransactionsValue();
    }

    public addTransaction(formData: ICreateTransaction) {

        const newTransaction: ITransaction = { ...formData, id: crypto.randomUUID().toString() };
        this.transactionList.update((oldTransactionList) => [...oldTransactionList, newTransaction]);
    }

    public removeTransaction(transactionId: string) {

        this.transactionList.update((transactionList) => transactionList.filter(transactionToDelete => transactionToDelete.id !== transactionId));
    }
}