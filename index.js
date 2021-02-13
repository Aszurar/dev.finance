//pegando o modal-overlay 
const modal_overlay = document.querySelector('.modal-overlay')

const Modal = {
    myToggleModal(){
        // Quando o botão for clicado, adicione a classe active no model overlay
        modal_overlay.classList.toggle('active')
    }

}

// Numbers que representam o dinheiro são tratados diferentes no back-end,
// eles não possuem a mesma formatação  . ou , Nesse caso, eles são representados
// com suas partes decimais junto da prinicipal normalmente
const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },

    {
        id: 2,
        description: 'Criação de Website',
        amount: 500000,
        date: '23/01/2021'
    },

    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    },
    {
        id: 4,
        description: 'App',
        amount: 240000,
        date: '23/01/2021'
    }


]

// preciso somar as entradas
// preciso somar as Saídas
// preciso subtrair as saídas das entradas
// Assim terei o total

const Transaction = {
    incomes(){
        // somar as entradas
    },

    expenses(){
        // somar as saídas
    },

    total(){
        // somar o total
    }
}

// preciso pegar as minhas transações do meu objeto transaction
// e colocar no HTML
// Ou seja, substituir os dados do HTML com os dados do CSS

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        // agr, vamos preencher o tr com a variável html da função abaixo:
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        // agr vamos adicionar todo esse tr à tbody!
        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        const amount = Utils.formatCurrency(transaction.amount)
        
        const html =
        `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        `

        return html;
    }
}


const Utils = {
    formatCurrency(value) {
        console.log(value);
    }
}
// aqui poderia fazer um tratamento de erro para que caso seja 
// passado uma transação com um índice maior do que a quantidade
// que já se tem, a função não prosiga e seja alertado ao usuário
transactions.forEach(transaction => {
    DOM.addTransaction(transaction)
});

