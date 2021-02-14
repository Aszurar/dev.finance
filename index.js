//pegando o modal-overlay 
const modal_overlay = document.querySelector('.modal-overlay')

const Modal = {
    myToggleModal(){
        // Quando o botão for clicado, adicione a classe active no model overlay
        modal_overlay.classList.toggle('active')
    }

}


// calculo das entradas, saídas e total.
const Transaction = {
    all: [
            {
                description: 'Luz',
                amount: -50000,
                date: '23/01/2021'
            },
        
            {
                description: 'Criação de Website',
                amount: 500000,
                date: '23/01/2021'
            },
        
            {
                description: 'Internet',
                amount: -20000,
                date: '23/01/2021'
            },
            {
                description: 'App',
                amount: 240000,
                date: '23/01/2021'
            }
        ]
    ,
    add(transaction) {
        Transaction.all.push(transaction)
      
        App.reload()
    },

    remove(index) {
        // método splice remove o elemento a partir do índice
        // o outro parÂmetro é a quantidade de elementos que devem ser removidos
        // caso seja 1, será somente o elemento do index selecionado 
        // caso seja 2 ou mais, será removidos a partir do elemento do index passado.
        Transaction.all.splice(index, 1)
        App.reload()
    },

    incomes(){
        // soma das entradas
        let income = 0
        Transaction.all.forEach(transaction => {            
            if (transaction.amount > 0) {
                income += transaction.amount
            }
        })        
        
        return income
    },

    expenses(){
        // soma das saídas
        let expense = 0
        Transaction.all.forEach(transaction => {
            if (transaction.amount < 0) {
                expense += transaction.amount
            }
        })
        return expense
    },

    total(){
     // total, poderia percorrer as transações novamente e somar tudo
    // mas é mais inteligente simplesmente somar as entradas com as saídas 
        return Transaction.incomes() + Transaction.expenses()
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
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        `

        return html;
    },

    // atualizando os valores totais de entrada, saída e total
    updateBalance(){
        document
            .getElementById("income-display")
            .innerHTML = Utils.formatCurrency(Transaction.incomes()) 
        document
            .getElementById("expense-display")
            .innerHTML = Utils.formatCurrency(Transaction.expenses())
        document
        .getElementById("total-display")
        .innerHTML = Utils.formatCurrency(Transaction.total())
    },

    clearTransactions(){
        DOM.transactionsContainer.innerHTML = ""
    }
}


const Utils = {
    formatCurrency(value) {
        // gerando o sinal de -0
        const signal = Number(value) < 0 ? "-" : ""

        // removendo o sinal de negativo dos números
        value = String(value).replace(/\D/g, "")

        // é necessário que seja um número par ausar o toLocaleString para
        // além disso, dividimos por 100 para que permaneca o valor original
        // se não, será entendido um valor 100 vezes maior
        value = Number(value) / 100
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}
// aqui poderia fazer um tratamento de erro para que caso seja 
// passado uma transação com um índice maior do que a quantidade
// que já se tem, a função não prosiga e seja alertado ao usuário

const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues() {
       return {
           description: Form.description.value,
           amount: Form.amount.value,
           date: Form.date.value
       } 
    },

    validateFields(){
    //Verificar se todoas as informações foram preenchidas
        const { description, amount, date } = Form.getValues()

        console.log(description)

        // método trim remove todos os espaços vazios do description
        // isso é feito para verificarmos se tem ou não algum conteúdo
        // na string
        if ( description.trim() == "" || 
             amount.trim() == "" || 
             date.trim() == "") {
                throw new Error("Por favor, preencha todos os campos!.")
        }
    },

    submit(event) {
        event.preventDefault()

        

        try {
            Form.validateFields()
            // Algoritmo
            // formatar os dados para salvar
            // salvar
            // apagar os dados do formulário
            // modal feche
            // Atualizar App
        } catch (error) {
            // capturar o erro e mostrar ao usuário!
            alert(error.message)
        }

    }
}

const App = {
    init(){
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        
        });      
    
        DOM.updateBalance()    
    },

    reload() {
        DOM.clearTransactions()
        App.init()
    }
}

App.init()


// Transaction.add({
//     id: 5,
//     description: 'Sorvete',
//     amount: -34,
//     date: '23/01/2021'
// })


