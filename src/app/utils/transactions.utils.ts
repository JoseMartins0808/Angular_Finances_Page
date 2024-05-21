export interface IChoseTransaction {
    select: string;
    type: "input" | "output";
    description: string;
};

export const transactionList: IChoseTransaction[] = [
    {
        select: "Água",
        type: "output",
        description: "Conta mensal de água."
    },
    {
        select: "Luz",
        type: "output",
        description: "Conta mensal de luz."
    },
    {
        select: "Salário",
        type: "input",
        description: "Salário mensal."
    },
    {
        select: "Vale alimentação",
        type: "input",
        description: "Vale alimentação recebido mensalmente."
    },
    {
        select: "PLR",
        type: "input",
        description: "Participação dos lucros e resultados da empresa."
    },
    {
        select: "Aplicação financeira",
        type: "input",
        description: "Recebimeto de investimentos em aplicações financeiras."
    },
    {
        select: "Aluguel",
        type: "output",
        description: "Aluguel mensal."
    },
    {
        select: "Cartão de crédito",
        type: "output",
        description: "Gastos mensais com cartão de crédito"
    },
    {
        select: "Dízimo",
        type: "output",
        description: "Doação religiosa."
    },
    {
        select: "Aplicação financeira",
        type: "output",
        description: "Depósito de investimentos em aplicações financeiras."
    },
    {
        select: "Alarmes",
        type: "output",
        description: "Alarme residencial."
    },
]