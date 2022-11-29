//excluir
// utilize isso como base: https://pucminas.instructure.com/courses/127501/pages/videoaula-restful-api?module_item_id=2817882
   
  
 fetch("https://api.rawg.io/api/games?key=68ba723ff4a1495baf4efb38a8276320")
               .then(res=>res.json())
               .then(data => {    
                  let str ='';              
                  for (let i = 0; i<=data.results.length;i++){
                     let game = data.results[i]
                     str +=`<div class="card col-md-4" style="width: 18rem;">
                     <img src="${game.background_image}" class="card-img-top" alt="...">
                     <div class="card-body">
                       <h5 class="card-title">${game.name}</h5>
                       <p class="card-text">A data de lançamento ${game.released}</p>
                       <a href="https://rawg.io/games/${game.slug}" target ="_blank" class="btn btn-primary">Mais detalhes</a>
                     </div>
                   </div>`
                      
                  }
                  document.getElementById('tela').innerHTML= str
               }
                  
                  );

 
  ///https://pucminas.instructure.com/courses/127501/pages/videoaula-usando-apis-restful-aplicativo-cliente-ajax-pratica?module_item_id=2817889 c

  //continue por essa pratica ela pode ajudar bastante
  
  

   
   