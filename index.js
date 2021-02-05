// pegando o botão de nova transação
const button_newTransaction = document.querySelector('.button.new')
//pegando o modal-overlay 
const modal_overlay = document.querySelector('.modal-overlay')

const Modal = {
    open(){
        // Quando o botão for clicado, adicione a classe active no model overlay
        modal_overlay.classList.add('active')
    },

    close(){
        modal_overlay.classList.remove('active')
    }
}

