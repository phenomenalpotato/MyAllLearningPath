// export function fatorial (num) {

//     let fat = 1;

//     for (let c = 1; c < num; num--) {

//         fat *= num;
//     }

//     return fat;
// }


function fatorial (num) {

    let fat = 1;

    for (let c = 1; c < num; num--) {

        fat *= num;
    }

    return fat;
}

module.exports = {fatorial, dobro};

// exports.dobro = dobro;

function dobro (num) {

    return num * 2;
}

function triplo (num) {

    return num * 3;
}

// console.log(module); 