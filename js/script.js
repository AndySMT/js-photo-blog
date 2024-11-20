/* *Milestone 1*
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.
*Milestone 2*
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
*Milestone 3*
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare :faccia_leggermente_sorridente:
*Bonus*
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare
Aggiungere un loader al caricamento dei dati */

///////////////////////////////////////////////////////////////////////////////////////////////////

/* albumId: 1;
id: 1;
thumbnailUrl: "https://via.placeholder.com/150/92c952";
title: "accusamus beatae ad facilis cum similique qui sunt";
url: "https://via.placeholder.com/600/92c952"; */

const baseUrl = "https://jsonplaceholder.typicode.com/";
const resource = "photos";
const posts = document.getElementById("posts");
const overlay = document.getElementById("overlay");
const closeOverlay = document.querySelector("button");
closeOverlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
});
const params = { _limit: 6 };

generateCards();
function generateCards() {
  axios
    .get(baseUrl + resource, { params })
    .then((risposta) => {
      for (let i = 0; i < risposta.data.length; i++) {
        const dataApi = risposta.data[i];
        const fraseFinale = dataApi.title
          .split(" ")
          .map((parola) => parola.charAt(0).toUpperCase() + parola.slice(1))
          .join(" ");
        posts.innerHTML += `
            <div class="card" id="${dataApi.id}">
                <img src="${dataApi.url}">
                <p>${fraseFinale}</p>
                <span class="pin"><img src="./img/pin.svg" alt=""></span>
            </div>
            `;
      }
      overlayCard();
    })
    .catch((errore) => {
      console.log(errore);
    })
    .finally(() => {
      console.log("Chiamata dato terminata");
    });
}

const imgOverlay = overlay.querySelector("img");

function overlayCard() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      console.log(`Hai cliccato sulla card con id ${card.id}`);
      overlay.classList.remove("hidden");
      const img = card.querySelector("img");
      console.log(img);
      imgOverlay.src = img.src;
    });
  });
}
