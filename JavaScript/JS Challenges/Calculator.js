function calculator(numberOne, numberTwo, operador) {
    
    try {

        if (operador === '+') {

            return numberOne + numberTwo;
        } else if (operador === "-") {

            return numberOne - numberTwo;
        } else if (operador === "*") {

            return numberOne * numberTwo;
        }else if (operador === "/") {

            return numberOne / numberTwo;
        } else {

            return ("Cool operator. But, alas, it was not suppose to be used in this calculator at this stage.")
        }

    } catch (error) {

        console.error("Something went wrong you broke the calculator... Call suport to check what happened.");
    }
}

module.exports = {calculator};