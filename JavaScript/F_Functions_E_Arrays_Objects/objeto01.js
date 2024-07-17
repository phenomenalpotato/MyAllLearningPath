let amigo = {nome:'José', 
    
    sexo:'M', 
    
    peso:88.7,

    engordar(p = 0){

        console.log('Engordou!');

        this.peso += p; // this que é uma palavra auto-referencia ao objeto
    }};

// let amigo2 = [];

// console.log(typeof(amigo2));

// console.log(typeof(amigo));

console.log(amigo);

amigo.engordar(2);

console.log(`O ${amigo.nome}, pesa ${amigo.peso} Kg`);
