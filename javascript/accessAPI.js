//FUNÇÃO CHAMA CARREGA API//
    async function getGames(){
      const res = fetch("https://api.rawg.io/api/games?key=68ba723ff4a1495baf4efb38a8276320")
      return (await res).json()
    }

//CARREGA FUNÇÃO DA API E GERA OS CARDS PARA A TELA PRINCIPAL.//
    getGames().then(data => {
      let str=''
      for(let i=0;i<data.results.length;i++){
        let games = data.results[i]

       // let plats=''
       // for(let j=0; j<games.platforms.length;j++){
       //   plats=game.platforms[j].platforms.name 
       // }


          str += `<div class="col 12 col-sm-12 col-md-6 col-lg-3">
                    <img src="${games.background_image}" class="card-img-top">
                      <div class="card" style="width: 18r em;">                         
                        <div class="card-body">
                          <h5 class="card-title">${games.name}</h5>
                          <p class="card-text">Plataformas: ${games.rating}</p> 
                          
                          <p class="card-text">Lançamento: ${games.released}</p>
                          <a href="detalhes.html?id=${games.id}" class="btn btn-secondary" >Ver mais</a>
                        </div>
                      </div>
                  </div>`
        }
        document.getElementById('tela').innerHTML = str
      });


//////<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FUNÇÃO EXIBE DETALHES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//////
