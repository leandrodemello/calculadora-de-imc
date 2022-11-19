import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"


// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oniput = () => AlertError.close()
inputHeight.oniput = () => AlertError.close()

form.onsubmit = event => { // padrão é enviar o formulário e recaregar a página. 
    event.preventDefault() //evite o padrão!

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if (showAlertError) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

function notNumber(value) {
    return isNaN(value) || value == ""
  }
  
function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }

