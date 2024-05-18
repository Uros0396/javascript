/*RISPOSTA ESERCIZIO 1
Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

I principali datatype in Javascript sono: i numeri, le stringhe (vengono inserite tra le "" o '' o) vengono usate di solito per nomi, cognomi ecc... I booleani che possono essere "true" o "false", l' array che e' una lista e si indica con le parentesi quadre. Ci sono gli oggetti che contengono strutture di dati complesse e si mettono tra parentesi graffe. E poi ci sono il null e l' undefined, il primo indica che una variabile e' vuoto o vogliamo svuotarla, mentre il secondo sta a significare che ha un valore ma non e' definito.*/

/*RISPOSTA ESERCIZIO 2
Descrivi cos'è un oggetto in JavaScript, con parole tue.

Un oggetto in Javascript e' un insieme di datatype che vengono racchiusi tra 2 parentesi graffe.*/


/*RISPOSTA ESERCIZIO 3
ScriVi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.*/

const sum = 12 + 20
console.log(sum)


/*RISOSTA ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.*/

const x = 12
console.log(x)


/*RISPOSTA ESERCIZIO 5
Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.*/

const name = "Uros"
console.log(name)


/*RISPOSTA ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).*/

const difference = x - 12
console.log(difference)


/*RISPOSTA ESRCIZIO 7


Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

const name1 = "john"
const name2 = "John"
const notSame = name1 == name2
console.log(notSame)
console.log(name1.toLowerCase == name2.toLowerCase)