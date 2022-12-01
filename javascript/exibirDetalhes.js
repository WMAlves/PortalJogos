

  ////////////////////////FUNÇÃO DETALHES///////////////////////////////////////////////////////
  function exibeDetalheGame (){
    var request = new XMLHttpRequest()
  
  const value = decodeURI(window.location.href.split('?id=')[1]);

  var url ='https://api.rawg.io/api/games/' + value + '?key=68ba723ff4a1495baf4efb38a8276320'
  request.open('GET', url, true)
  request.onload =function() {
    var data = JSON.parse(this.response)
      
  
    if (request.status >= 200 && request.status < 400) {
      //data.forEach(game => {
              var html = ''
              var cardDiv = document.getElementById("infosDetalhe");
                          
                     html+= ` <div class="col 12 col-sm-12 col-md-6 col-lg-3">
                      <div class="card" style="width: 18r em;">
                          <img src="${data.background_image}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${data.name}</h5>
                            <p class="card-text">Rating: ${data.rating}</p>
                            <p class="card-text">Lançamento: ${data.released}</p>
                            <a href="#" class="btn btn-primary">Ver mais</a>
                          </div>
                        </div>
                  </div>`
          
              }   
              html +=`</div>`
              cardDiv.innerHTML = html;
  }
  
  // Send request
  request.send() 
  }


