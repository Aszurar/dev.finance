const modal_overlay = document.querySelector('.modal-overlay')

// dark-mode
// Infezlimente após a adição das rotas, das páginas create, edit... o darkmode não permance ativo.
// Funcionava corretamente antes da adição das rotas para o banco de dadosl
const DayNight = {
    toggleDayNight(){
        const toggleOn = document.querySelector('.toggle-on')
        const toggleOff = document.querySelector('.toggle-off')
        const body = document.querySelector('body')
        const cards = document.querySelectorAll('.card')
        const transaction = document.getElementById('transaction')
        const header = document.querySelector('header')
        const footer = document.querySelector('footer')
        
        toggleOn.classList.toggle('activate')
        toggleOff.classList.toggle('desactivate')
        body.classList.toggle('darkness')
        header.classList.toggle('darkness')
        transaction.classList.toggle('darkness')
        footer.classList.toggle('darkness')
        modal_overlay.classList.toggle('darkness')
        cards.forEach(card => {
            card.classList.toggle('darkness')
        })
        
    }
}

// ativar modal
const Modal = {
    /* ==========Essas 2 funções funcionavam antes do banco de dados de dados ser aplicado=======//
        myToggleModal(){
            // Quando o botão for clicado, ative o modal
            modal_overlay.classList.toggle('active')
        },
        
        newTransactionsActivate(){
            // efeito css quando o botão estiver ativado
            const newTransactions = document.querySelector('.button.new')
            newTransactions.classList.toggle('activate')
        },
    ===========================================================================================*/ 
    
    myModalCreateorEdit() {
        //ativar o modal com as páginas create e edit
        const url = location.href

        if (url.includes('create') || url.includes('edit')) {
            modal_overlay.classList.add('active')
        }
    }
}

// ativar o modal com as páginas create e edit
Modal.myModalCreateorEdit()

const IncomesAndExpenses = {
// ativar c res vermelhas ou verdes para os valores na tabela
    incomesAndExpenseColors() {
        const values = document.querySelectorAll('.values')

        values.forEach(value => {
            console.log('ALouuuu')
            if(value.innerHTML.includes("-")) {
                value.classList.add("expense")
            } else {
                value.classList.add("income")
            }
        })
    }
}

IncomesAndExpenses.incomesAndExpenseColors()


//===========dev.finance$ original===============
// configuração do localStorage
// armazenando as transações no localstorage!
// const Storage = {
//     get(){
        // Retorna o array de transações do localStorage ou retorna um array vazio
    //    return JSON.parse(localStorage.getItem("dev.finances: transactions")) || []
    // },
    
    // set(transactions) {
        // configurando o array de transações para string para poder ser armazenado no
        // localStorage
        // JSON.stringify tem a função de transformar o array de transações em uma string
        // localStorage.setItem("dev.finances: transactions", JSON.stringify(transactions))
    // }
// }

// calculo das entradas, saídas e total.
// const Transaction = {
    // all: Storage.get(),

    // add(transaction) {
    //     Transaction.all.push(transaction)
      
    //     App.reload()
    // },

    // remove(index) {
    //     // método splice remove o elemento a partir do índice
    //     // o outro parÂmetro é a quantidade de elementos que devem ser removidos
    //     // caso seja 1, será somente o elemento do index selecionado 
    //     // caso seja 2 ou mais, será removidos a partir do elemento do index passado.
    //     Transaction.all.splice(index, 1)
    //     App.reload()
    // },

    // incomes(){
    //     // soma das entradas
    //     let income = 0
    //     Transaction.all.forEach(transaction => {            
    //         if (transaction.amount > 0) {
    //             income += transaction.amount
    //         }
    //     })        
        
    //     return income
    // },

    // expenses(){
    //     // soma das saídas
    //     let expense = 0
    //     Transaction.all.forEach(transaction => {
    //         if (transaction.amount < 0) {
    //             expense += transaction.amount
    //         }
    //     })
    //     return expense
    // },

    // total(){
    //  // total, poderia percorrer as transações novamente e somar tudo
    // // mas é mais inteligente simplesmente somar as entradas com as saídas 
    //     return Transaction.incomes() + Transaction.expenses()
    // }
// }

// preciso pegar as minhas transações do meu objeto transaction
// e colocar no HTML
// Ou seja, substituir os dados do HTML com os dados do CSS
// const DOM = {
//     transactionsContainer: document.querySelector('#data-table tbody'),

//     addTransaction(transaction, index) {
//         const tr = document.createElement('tr');
//         // agr, vamos preencher o tr com a variável html da função abaixo:
//         tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
//         // agr vamos adicionar todo esse tr à tbody!
//         DOM.transactionsContainer.appendChild(tr)
//         tr.dataset.index = index
//     },

//     innerHTMLTransaction(transaction, index) {
//         const CSSclass = transaction.amount > 0 ? "income" : "expense"
//         const amount = Utils.formatCurrency(transaction.amount)
        
//         const html =
//         `
//             <td class="description">${transaction.description}</td>
//             <td class="${CSSclass}">${amount}</td>
//             <td class="date">${transaction.date}</td>
//             <td><span id="edit" class="material-icons">settings_applications</span></td>
//             <td><span id="remove" class="material-icons">delete_forever</span></td>
//         `

//         return html;
//     },

//     // atualizando os valores totais de entrada, saída e total
//     updateBalance(){
//         document
//             .getElementById("income-display")
//             .innerHTML = Utils.formatCurrency(Transaction.incomes()) 
//         document
//             .getElementById("expense-display")
//             .innerHTML = Utils.formatCurrency(Transaction.expenses())
//         document
//         .getElementById("total-display")
//         .innerHTML = Utils.formatCurrency(Transaction.total())
//     },

//     clearTransactions(){
//         DOM.transactionsContainer.innerHTML = ""
//     }
// }


// const Utils = {
//     formatAmount(value) {
//         value = Number(value) * 100

//         return Math.round(value)
//     },

//     formatDate(date) {
//         const splittedDate = date.split("-")
        
//         return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
//     },

//     formatCurrency(value) {
//         // gerando o sinal de -0
//         const signal = Number(value) < 0 ? "-" : ""

//         // removendo o sinal de negativo dos números
//         value = String(value).replace(/\D/g, "")

//         // é necessário que seja um número par ausar o toLocaleString para
//         // além disso, dividimos por 100 para que permaneca o valor original
//         // se não, será entendido um valor 100 vezes maior
//         value = Number(value) / 100
//         value = value.toLocaleString("pt-BR", {
//             style: "currency",
//             currency: "BRL"
//         })

//         return signal + value
//     }

// }

// const Form = {
//     description: document.querySelector('input#description'),
//     amount: document.querySelector('input#amount'),
//     date: document.querySelector('input#date'),

//     getValues() {
//        return {
//            description: Form.description.value,
//            amount: Form.amount.value,
//            date: Form.date.value
//        } 
//     },

//     validateFields(){
//     //Verificar se todoas as informações foram preenchidas
//         const { description, amount, date } = Form.getValues()

//         // método trim remove todos os espaços vazios do description
//         // isso é feito para verificarmos se tem ou não algum conteúdo
//         // na string
//         if ( description.trim() == "" || 
//              amount.trim() == "" || 
//              date.trim() == "") {
//                 throw new Error("Por favor, preencha todos os campos!.")
//         }
//     },

//     formatValue(){
//     // formatar os dados para salvar
//         let { description, amount, date } = Form.getValues()
        
//         amount = Utils.formatAmount(amount)
//         date = Utils.formatDate(date)

//         return { 
//             description, 
//             amount, 
//             date
//         }
//     },
    
//     saveTransaction(transaction){
//         Transaction.add(transaction)
//     },

//     clearFields(){
//         Form.description.value = ""
//         Form.amount.value = ""
//         Form.date.value = ""
//     },

//     submit(event) {
//         event.preventDefault()

        

//         try {

//             Form.validateFields() 
//             // formatar os dados
//             const transaction = Form.formatValue()

//             // salvar
//             Form.saveTransaction(transaction)

//             // apagar os dados do formulário
//             Form.clearFields()
            
//             // modal feche
//             Modal.myToggleModal()
//         } catch (error) {
//             // capturar o erro e mostrar ao usuário!
//             alert(error.message)
//         }

//     }
// }



// const App = {
//     init(){
//         Transaction.all.forEach((transaction, index) => {
//             DOM.addTransaction(transaction, index)
        
//         });      
    
//         DOM.updateBalance() 
        
//         Storage.set(Transaction.all)
//     },

//     reload() {
//         DOM.clearTransactions()
//         App.init()
//     }
// }

// App.init()


// Transaction.add({
//     id: 5,
//     description: 'Sorvete',
//     amount: -34,
//     date: '23/01/2021'
// })


