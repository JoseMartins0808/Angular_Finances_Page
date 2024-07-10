export interface IChoseTransaction {
    select: string;
    type: "input" | "output";
    description: string;
};

export interface IChoseSearchTransaction extends IChoseTransaction {
    firstString: String;
    searchString: String;
    lastString: String;
}

export const transactionList: IChoseTransaction[] = [
    {
        select: "Água",
        type: "output",
        description: "Conta mensal de água."
    },
    {
        select: "Salário",
        type: "input",
        description: "Salário mensal."
    },
    {
        select: "Luz",
        type: "output",
        description: "Conta mensal de luz."
    },
    {
        select: "Vale alimentação",
        type: "input",
        description: "Vale alimentação recebido mensalmente."
    },
    {
        select: "Aluguel",
        type: "output",
        description: "Aluguel mensal."
    },
    {
        select: "PLR",
        type: "input",
        description: "Participação dos lucros e resultados da empresa."
    },
    {
        select: "Cartão de crédito",
        type: "output",
        description: "Gastos mensais com cartão de crédito"
    },
    {
        select: "Aplicação financeira",
        type: "input",
        description: "Recebimeto de investimentos em aplicações financeiras."
    },
    {
        select: "Dízimo",
        type: "output",
        description: "Doação religiosa."
    },
    {
        select: "Venda de Carro",
        type: "input",
        description: "Receita de venda de um carro."
    },
    {
        select: "Aplicação financeira",
        type: "output",
        description: "Depósito de investimentos em aplicações financeiras."
    },
    {
        select: "Venda de Moto",
        type: "input",
        description: "Receita de venda de uma moto."
    },
    {
        select: "Alarmes",
        type: "output",
        description: "Alarme residencial."
    },
    {
        select: "Ganho no Poker",
        type: "input",
        description: "Valor recebido em jogo de Poker."
    },
    {
        select: "Compra de Carro",
        type: "output",
        description: "Despesa assumida por comprar um carro."
    },
    {
        select: "Tarefa Freelancer",
        type: "input",
        description: "Valor recebido por concluir uma tarefa realizada como freelancer."
    },
    {
        select: "Compra de Moto",
        type: "output",
        description: "Despesa assumida por comprar uma moto."
    },
    {
        select: "Prêmio em Título de Capitalização",
        type: "input",
        description: "Valor recebido por sorteio em Título de Capitalização contratado por banco diverso."
    },
    {
        select: "Mensalidade Escolar",
        type: "output",
        description: "Despesa com educação"
    },
    {
        select: "Comissão de Venda",
        type: "input",
        description: "Valor recebido a título de comissão por venda diversa."
    },
    {
        select: "Conta de Celular",
        type: "output",
        description: "Despesa mensal para utilização de celular pessoal."
    },
    {
        select: "Prêmio de loteria",
        type: "input",
        description: "Valor recebido por sorteio em loteria."
    },
    {
        select: "Doação",
        type: "output",
        description: "Doação de valores diversos."
    },
    {
        select: "Herança",
        type: "input",
        description: "Valor recebido por herança de direito."
    },
    {
        select: "Compra de móveis",
        type: "output",
        description: "Valor despendido para conpra de móveis para casa."
    },
    {
        select: "Prêmio no jogo do Tigrinho",
        type: "input",
        description: "Valores ganhos no jogo do tigrinho."
    },
    {
        select: "Aposta no jogo do Tigrinho",
        type: "output",
        description: "Dinheiro empenhado para continuar apostando no jogo do tigrinho."
    },
    {
        select: "Trabalho Autônomo",
        type: "input",
        description: "Receita recebida mensalmente por desenpenho de trabalho autônomo."
    },
    {
        select: "Contratação de Trabalho Autônomo",
        type: "output",
        description: "Valor despendido com trabalho autônomo contratado diverso."
    },
    {
        select: "Receita de tarefa",
        type: "input",
        description: "Valor recebido por uma determinada tarefa."
    },
    {
        select: "Despesa de tarefa",
        type: "output",
        description: "Valor despendido por contratação de uma tarefa."
    },
    {
        select: "Venda de Salgados",
        type: "input",
        description: "Valores recebidos por venda de salgados diversos."
    },
    {
        select: "Reforma da casa",
        type: "output",
        description: "Valor gasto com reformas variadas no imóvel familiar."
    },
    {
        select: "Prêmio de aposta esportiva",
        type: "input",
        description: "Valores recebidos por previsões certas em apostas esportivas."
    },
    {
        select: "Honorários Advocatícios",
        type: "output",
        description: "Valor pago para advogados em ações diversas."
    },
    {
        select: "Ganhos em Ações Judiciais",
        type: "input",
        description: "Valores recebidos em ações judiciais por sentenças em provimentos favoráveis."
    },
    {
        select: "Custas Processuais",
        type: "output",
        description: "Valor pago a título de custas processuais em ações diversas."
    },
    {
        select: "Dinheiro Achado",
        type: "input",
        description: "Dinheiro achado em gavetas, na rua, ou em roupas, etc."
    },
    {
        select: "Honorários Advocatícios Sucumbenciais",
        type: "output",
        description: "Honorários pagos ao advogado da parte contrária em caso de sucumbência da ação."
    },
    {
        select: "Recebimento de Empréstimo",
        type: "input",
        description: "Dinheiro recebido para quitar valor que você emprestou, à juros."
    },
    {
        select: "Consulta Médica",
        type: "output",
        description: "Valor despendido em consulta médica diversa."
    },
    {
        select: "Hora Extra",
        type: "input",
        description: "Valor recebido em 50% a mais, por trabalho extraordinário."
    },
    {
        select: "Mediamentos",
        type: "output",
        description: "Valor gasto com medicamentos diversos."
    },
    {
        select: "Acerto do Trabalho",
        type: "input",
        description: "Valor recebido pelo acerto final ao encerrar o Contrato de Trabalho."
    },
    {
        select: "Seguro Veicular",
        type: "output",
        description: "Valor gasto com seguro de veículdo."
    }
]