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
const params = { _limit: 6 };

axios
  .get(baseUrl + resource, { params })
  .then((risposta) => {
    for (let i = 0; i < risposta.data.length; i++) {
      const dataApi = risposta.data[i];
      posts.innerHTML += `<div class="card">
                <img src="${dataApi.url}">
                <p>${dataApi.title}</p>
            </div>`;
    }
  })
  .catch((errore) => {
    console.log(errore);
  })
  .finally(() => {
    console.log("Chiamata dato terminata");
  });
/* console.log(response.data); */
