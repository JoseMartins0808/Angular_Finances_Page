export interface ITransaction {
    id: string;
    value: string;
    type: "input" | "output";
    description: string
}

export type ICreateTransaction = Omit<ITransaction, "id">;