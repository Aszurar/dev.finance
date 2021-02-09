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
const transaction = [
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
    addTransaction() {
        const tr = documet.createElement('tr');
    },

    innerHTMLTransaction() {
        const html =
        `
            <td class="description">Internet</td>
            <td class="expense">-R$ 200,00</td>
            <td class="date">23/01/2021</td>
            <td><img src="./assets/minus.svg" alt="Remover Transação"></td>
        `
    }
}