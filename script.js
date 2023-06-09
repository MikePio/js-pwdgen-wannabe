/*
In console:
-creare un variabile con un prompt che chiede il nome
-creare un variabile con un prompt che chiede il cognome
-creare un variabile con un prompt che chiede il colore preferito
-creare una variabile contenente il numero 23
-unire tutte le stringhe e il numero 23 per generare un password fake

*bonus
In pagina:
-mostra tutti i dati inseriti e generati
*/

console.log('test');

const name_user = prompt('Inserisci il tuo nome:') ;
const surname_user = prompt('Inserisci il tuo cognome:');
const favourite_color = prompt('Inserisci il nome del tuo colore preferito:')
const number = 23;

// test delle varibili nella console
console.log(name_user, surname_user, favourite_color, number );

//password generata stampata nella console
const pass_generated = name_user + surname_user + favourite_color + number;
console.log(pass_generated);

// *bonus
document.getElementById('name').innerHTML += " " + name_user;
document.getElementById('surname').innerHTML += " " + surname_user;
// qui lo spazio non è stato aggiunto perché è stato utilizzato uno span in html che crea automaticamente dello spazio tra le parole
document.getElementById('color').innerHTML += favourite_color;


// con outerHTML la costante o qualsiasi altro valore viene scritto fuori dal tag. In questo caso pass_generated verrà scritto fuori dal tag <p>La tua password generata è:</p> e quindi pass_generated andrà a capo senza cancellare La tua password generata è:
document.getElementById('new_password').outerHTML += pass_generated;
// OPPURE METODO MIGLIORE
document.getElementById('new_password_2').innerHTML = `
<h1>
  La tua password generata è: <br>
  ${pass_generated}
</h1>
`

// *bonus 2
// Genera un numero casuale compreso tra 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// window.onload = ogni volta che la pagina si aggiorna
window.onload = function() {

  // Aggiorna il contenuto di un elemento HTML con il numero casuale generato
  document.getElementById("random_number").innerHTML += " " + randomNumber;

  const pass_with_random_number = name_user + surname_user + favourite_color + randomNumber;
  console.log('pass_with_random_number', pass_with_random_number);
  document.getElementById("new_password_3").innerHTML += " " + pass_with_random_number;
}



















