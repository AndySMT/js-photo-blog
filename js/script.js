/* https://flynn.boolean.careers/exercises/api/random/int (ritorna un numero da 1 a 9)
https://flynn.boolean.careers/exercises/api/random/word (ritorna una parola)
https://flynn.boolean.careers/exercises/api/random/name (ritorna un nome)
https://flynn.boolean.careers/exercises/api/random/mail (ritorna una email)
https://flynn.boolean.careers/exercises/api/random/phone (ritorna un numero di telefono)
https://flynn.boolean.careers/exercises/api/random/sentence (ritorna una frase)
https://flynn.boolean.careers/exercises/api/random/boolean (ritorna o vero o falso)
https://flynn.boolean.careers/exercises/api/array/integers?min=n&max=n&items=n (ritorna un array di items numeri, contenuti nel range min-max) */

/* https://jsonplaceholder.typicode.com/
Font: Edu Tas Beginner */

/* 
*Milestone 1*
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
*Milestone 2*
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
*Milestone 3*
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
*Bonus*
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata */

/* albumId: 1;
id: 1;
thumbnailUrl: "https://via.placeholder.com/150/92c952";
title: "accusamus beatae ad facilis cum similique qui sunt";
url: "https://via.placeholder.com/600/92c952"; */

const baseUrl = "https://jsonplaceholder.typicode.com/";
const resource = "photos";
const posts = document.getElementById("posts");
/* const endpoint = baseUrl + resource; */
const params = { _limit: 6 };

axios.get(baseUrl + resource, { params }).then((response) => {});
/* console.log(response.data); */