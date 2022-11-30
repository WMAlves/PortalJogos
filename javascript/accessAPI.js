       //optei por criar a função para ficar mais funcional na hora de reutilizar
    async function getGames(){
      const res = fetch("https://api.rawg.io/api/games?key=68ba723ff4a1495baf4efb38a8276320")
      return (await res).json()
    }


    getGames().then(data => {
      let str=''
      for(let i=0;i<data.results.length;i++){
        let games = data.results[i]
    //Monta Card's
          str += `<div class="col 12 col-sm-12 col-md-6 col-lg-3">
                    <img src="${games.background_image}" class="card-img-top">
                      <div class="card" style="width: 18r em;">                         
                        <div class="card-body">
                          <h5 class="card-title">${games.name}</h5>
                          <p class="card-text">Rating: ${games.rating}</p>
                          <p class="card-text">Lançamento: ${games.released}</p>
                          
                          <a href="detalhes.html?${games.id}" class="btn btn-secondary" >Ver mais</a>
                        </div>
                      </div>
                  </div>`
        }
        document.getElementById('tela').innerHTML = str
      }
    
    );

 //   getGames().then(data=> {
 //     const games = data.results
 //     console.log(games)
 //     
 //  
 //     
 //   })

///    getGames().then(data=>{
///      const games = data.results
///      const gameInfo = []
///      for (let g of games){      
///        gameInfo.push( {
///          "Nome":g.name,
///         
///          "Lançamento": g.released,
///          "Avaliação":g.rating,
///          
///        })
///      }
///
///      console.table(gameInfo)
///
///    })
//
//function detalhe(){
//  
//  const value = decodeURI(window.location.href.split('?id=')[1]);
//  var url ='https://api.rawg.io/api/games/' + value + '?key=68ba723ff4a1495baf4efb38a8276320'
//  fetch("https://api.rawg.io/api/games/")
//
//    
//  }
//
//}