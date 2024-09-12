function leiaint(msg) {

    process.stdout.write(msg);

    process.stdin.on('data', eInt => {
        
        if (isNaN(Number.parseInt(eInt))) {
    
            console.log("ERRO! Digite um número inteiro válido!");

            process.stdout.write('Digite um número: ');

            return false;
        
        } else {
    
            process.stdout.write(`Você acabou de digitar o número ${eInt}`);
        }

        process.exit();
    });
}

leiaint('Digite um número: ');