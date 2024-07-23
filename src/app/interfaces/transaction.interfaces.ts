export interface ITransaction {
    id: string;
    option: string;
    value: string;
    type: "input" | "output";
    description: string;
    datetime: string;
}

export type ICreateTransaction = Omit<ITransaction, "id">;