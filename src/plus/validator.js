class Validator {

    constructor() {
        this.validations = [
            'data-min-length',
            'data-max-length',
            'data-only-letters',
            'data-email-validate',
            'data-required',
            'data-equal',
            'data-password-validate',
        ]
    }

// comienza a validar todos los campos
validate(form) {

// borrar todas las validaciones antiguas

        let currentValidations = document.querySelectorAll('form .error-validation');

        if (currentValidations.length) {
            this.cleanValidations(currentValidations);
        }

// obtener todas los inputs
        let inputs = form.getElementsByTagName('input');
        // transformar HTMLCollection em arr
        let inputsArray = [...inputs];

        // loop en los inputs y validación a través de los atributos encontrados
        inputsArray.forEach(function (input, obj) {

            // realizar la validación de acuerdo con el atributo del input
            for (let i = 0; this.validations.length > i; i++) {
                if (input.getAttribute(this.validations[i]) != null) {

                    // borra string para conocer el método
                    let method = this.validations[i].replace("data-", "").replace("-", "");

                    // valor del input
                    let value = input.getAttribute(this.validations[i])

                    // invoca el método
                    this[method](input, value);

                }
            }

        }, this);

    }

    // método para validar si tiene un mínimo de caracteres
    minlength(input, minValue) {

        let inputLength = input.value.length;

        let errorMessage = `El campo debe tener al menos ${minValue} caracteres`;

        if (inputLength < minValue) {
            this.printMessage(input, errorMessage);
        }

    }

    // método para validar si pasaste el máximo de caracteres
    maxlength(input, maxValue) {

        let inputLength = input.value.length;

        let errorMessage = `El campo debe ser menor que ${maxValue} caracteres`;

        if (inputLength > maxValue) {
            this.printMessage(input, errorMessage);
        }

    }

    // método para validar strings que solo contienen letras
    onlyletters(input) {

        let re = /^[A-Za-z]+$/;;

        let inputValue = input.value;

        let errorMessage = `Este campo no acepta números ni caracteres especiales.`;

        if (!re.test(inputValue)) {
            this.printMessage(input, errorMessage);
        }

    }

    // método para validar e-mail
    emailvalidate(input) {
        let re = /\S+@\S+\.\S+/;

        let email = input.value;

        let errorMessage = `Ingrese un correo electrónico en el patrón email@email.com`;

        if (!re.test(email)) {
            this.printMessage(input, errorMessage);
        }

    }

    // verificar se um campo está igual o outro
    equal(input, inputName) {

        let inputToCompare = document.getElementsByName(inputName)[0];

        let errorMessage = `Este campo precisa estar igual ao ${inputName}`;

        if (input.value != inputToCompare.value) {
            this.printMessage(input, errorMessage);
        }
    }

    // comprobar si un campo es igual a otro
    required(input) {

        let inputValue = input.value;

        if (inputValue === '') {
            let errorMessage = `Este campo es obligatorio`;

            this.printMessage(input, errorMessage);
        }

    }

    // validando password
    passwordvalidate(input) {

        // transformar string em array
        let charArr = input.value.split("");

        let uppercases = 0;
        let numbers = 0;

        for (let i = 0; charArr.length > i; i++) {
            if (charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
                uppercases++;
            } else if (!isNaN(parseInt(charArr[i]))) {
                numbers++;
            }
        }

        if (uppercases === 0 || numbers === 0) {
            let errorMessage = `La contraseña necesita un carácter en mayúscula y un número`;

            this.printMessage(input, errorMessage);
        }

    }

    // método para imprimir mensajes de error
    printMessage(input, msg) {

        // comprobar los errores presentes en el input
        let errorsQty = input.parentNode.querySelector('.error-validation');

        // imprimir erro solo si no hay errores
        if (errorsQty === null) {
            let template = document.querySelector('.error-validation').cloneNode(true);

            template.textContent = msg;

            let inputParent = input.parentNode;

            template.classList.remove('template');

            inputParent.appendChild(template);
        }

    }

    // elimina todas las validaciones para volver a verificar
    cleanValidations(validations) {
        validations.forEach(el => el.remove());
    }

}

let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');

let validator = new Validator();

// evento de envío de formulario, que valida las entradas
submit.addEventListener('click', function (e) {
    e.preventDefault();

    validator.validate(form);
});