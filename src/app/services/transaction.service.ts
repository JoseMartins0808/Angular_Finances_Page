import { Injectable, signal } from "@angular/core";
import { ICreateTransaction, ITransaction } from "../interfaces/transaction.interfaces";

@Injectable({ providedIn: "root" })
export class TransactionService {
    private readonly transactionList = signal<ITransaction[]>([]);

    public getTransactionList() {

        return this.transactionList;
    }

    public addTransaction(formData: ICreateTransaction) {

        const newTransaction: ITransaction = { ...formData, id: crypto.randomUUID.toString() };

        this.transactionList.update((oldTransactionList) => [...oldTransactionList, newTransaction]);
    }

    public removeTransaction(transactionId: string) {

        this.transactionList.update((oldList) => oldList.filter(transactionToDelete => transactionToDelete.id !== transactionId));
    }
}