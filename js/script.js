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
      const fraseFinale = dataApi.title
        .split(" ")
        .map((parola) => parola.charAt(0).toUpperCase() + parola.slice(1))
        .join(" ");
      posts.innerHTML += `<div class="card">
                <span class="pin"><img src="../img/pin.svg" alt=""></span>
                <img src="${dataApi.url}">
                <p>${fraseFinale}</p>
            </div>
            `;
    }
  })
  .catch((errore) => {
    console.log(errore);
  })
  .finally(() => {
    console.log("Chiamata dato terminata");
  });
