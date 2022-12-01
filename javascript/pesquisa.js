const apiKey = "68ba723ff4a1495baf4efb38a8276320";
let txtSearch = document.getElementById("txtSearch");
let btnSearch = document.getElementById("btnSearch");
let gamesPlace = document.getElementById("exibePesquisa");

function doSearch() {
  let textoPesquisa = txtSearch.value;
  let url = `https://api.rawg.io/api/games?key=${apiKey}&search=${textoPesquisa}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      var exibe = "";
      for (let i = 0; i < data.results.length; i++) {
        let game = data.results[i];
        exibe += `<div class="col 12 col-sm-12 col-md-6 col-lg-3">
            <img src="${game.background_image}" class="card-img-top">
              <div class="card" style="width: 18r em;">                         
                <div class="card-body">
                  <h5 class="card-title">${game.name}</h5>
                  <p class="card-text">Rating: ${game.rating}</p>                  
                  <p class="card-text">Lançamento: ${game.released}</p>
                  <a href="detalhes.html?${game.id}" class="btn btn-secondary" >Ver mais</a>
                </div>
              </div>
          </div> `;
      }
      document.getElementById("tela").innerHTML = exibe;
    });

  //alert(textoPesquisa)
}

document.body.onload = () => {
  btnSearch.addEventListener("click", doSearch);
};
