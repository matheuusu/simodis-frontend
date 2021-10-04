export default function Modal() {


    function open() {

        const modalWrapper = document.querySelector('.modal-wrapper')
        const createButton = document.querySelector('.create-course')

        createButton.addEventListener("click", close)
        
        //funcionalidade de atribuir a classe active para a modal
        modalWrapper.classList.add("active")
    }
    function close() {
        //funcionalidade de remover a classe active da modal
        modalWrapper.classList.remove("active")
    }

    return {
        open,
        close
    }
}
