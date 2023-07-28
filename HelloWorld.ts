// ############################################
// #
// #   Title: Mexican Tonalpohualli
// #   Author: Pedro Díaz
// #   Versión: 0.1
// #   Language : TypeScript
// #
// ############################################
import * as readline from 'readline';
/*
var tonallis = new Array(4) ;
tonallis = ["Cipactli",
    "Ehecatl",
    "Calli",
    "Cuetzpalin",
    "Coatl",
    "Miquiztli",
    "Mazatl",
    "Tochtli",
    "Atl",
    "Itzcuintli",
    "Ozomahtli",
    "Malinalli",
    "Acatl",
    "Ocelotl",
    "Cuauhtli",
    "Cozcacuauhtli",
    "Olin",
    "Tecpatl",
    "Quiahuitl",
    "Xochitl"
];
for(var i = 0;i<tonallis.length;i++) { 
    console.log(tonallis[i]) ;
 }

 console.log("==========================================");

 for (const ton of tonallis){
    console.log(ton);
 }

 console.log("==========================================");

 let pop: number = 10_000_000_000;

 console.log(pop);

 console.log("Fin del programita");


*/
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Is this example useful? [y/n] ', (answer) => {
    switch(answer.toLowerCase()) {
    case 'y':
        console.log('Super!');
        break;
    case 'n':
        console.log('Sorry! :(');
        break;
    default:
        console.log('Invalid answer!');
    }
    rl.close();
});


 