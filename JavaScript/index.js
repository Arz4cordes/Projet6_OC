function showMovie(data, aGenre) {
  let i = 0;
  if (aGenre == "B"){
    i = 1;}
  for (i ; i < 5 ; i++){
    let theGenres = data.results[i].genres;
    let theWriters = data.results[i].writers;
    let theActors = data.results[i].actors;
    let theImdb = data.results[i].imdb_score;
    let theTitle = data.results[i].title;
    let theImage = data.results[i].image_url;
    let theYear = data.results[i].year;
    baliseImage = ".film" + i.toString() + aGenre;
    baliseModal = "mod_" + i.toString() + aGenre;
    refModal = "#" + baliseModal
    let filmClass = document.querySelectorAll(baliseImage)
    console.log(filmClass)
    for (let k = 0 ; k < 4 ; k++){
      filmClass[k].innerHTML = '<a href="' + refModal + '" title="Lien vers la fenêtre modale"><img src="'
       + theImage + '" alt="image du film" title="' + theTitle + '" width="200" height=auto /> </a>';
    }

    
    
    modal_display = '<a href="#heading_film" class="toclose">X</a> Titre: ' + theTitle;
    modal_display += '<img src="' + theImage + '" class="modal_image" alt="image du film" title="' + theTitle + '" width="200" height=auto />'
    modal_display += '<br/> Score imdb: ' + theImdb;
    modal_display += '<br/> Année: ' + theYear;
    modal_display += '<br/> Genres: '
    for (let j=0 ; j < theGenres.length ; j++){
      modal_display += theGenres[j] + ' ; '
    }
    modal_display += '<br/> Réalisateurs: '
    for (let j=0 ; j < theWriters.length ; j++){
      modal_display += theWriters[j] + ' ; '
    }
    modal_display += '<br/> Acteurs: '
    for (let j=0 ; j < theActors.length ; j++){
      modal_display += theActors[j] + ' ; '
    }
    document.getElementById(baliseModal).innerHTML = modal_display;
  }
  
}

function showMovieP2(data, aGenre) {
  let p = 7;
  if (aGenre == "B"){
    p = 8;
  }
  for (let i = 5 ; i < p ; i++){
    let theGenres = data.results[i-5].genres;
    let theWriters = data.results[i-5].writers;
    let theActors = data.results[i-5].actors;
    let theImdb = data.results[i-5].imdb_score;
    let theTitle = data.results[i-5].title;
    let theImage = data.results[i-5].image_url;
    let theYear = data.results[i-5].year;
    baliseImage = ".film" + i.toString() + aGenre;
    baliseModal = "mod_" + i.toString() + aGenre;
    refModal = "#" + baliseModal
    let filmClass = document.querySelectorAll(baliseImage)
    for (let k = 0 ; k < 4 ; k++){
      filmClass[k].innerHTML = '<a href="' + refModal + '" title="Lien vers la fenêtre modale"><img src="'
       + theImage + '" alt="image du film" title="' + theTitle + '" width="200" height=auto /> </a>';
    }
    
    
    modal_display = '<a href="#heading_film" class="toclose">X</a> Titre: ' + theTitle;
    modal_display += '<img src="' + theImage + '" class="modal_image" alt="image du film" title="' + theTitle + '" width="200" height=auto />'
    modal_display += '<br/> Score imdb: ' + theImdb;
    modal_display += '<br/> Année: ' + theYear;
    modal_display += '<br/> Genres: '
    for (let j=0 ; j < theGenres.length ; j++){
      modal_display += theGenres[j] + ' ; '
    }
    modal_display += '<br/> Réalisateurs: '
    for (let j=0 ; j < theWriters.length ; j++){
      modal_display += theWriters[j] + ' ; '
    }
    modal_display += '<br/> Acteurs: '
    for (let j=0 ; j < theActors.length ; j++){
      modal_display += theActors[j] + ' ; '
    }
    document.getElementById(baliseModal).innerHTML = modal_display;
  }
  
}


apiAddress = "http://localhost:8000/api/v1/titles/";
apiAddress += "?year=&min_year=&max_year=";
apiAddress += "&genre=&genre_contains=drama";
apiAddress += "&sort_by=-imdb_score";

fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMovie(data, "D"))
.catch(error => console.log(error))

// page 2 de la requète drama

apiAddress += "&page=2";

fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMovieP2(data, "D"))
.catch(error => console.log(error))




// films d'aventures
apiAddress = "http://localhost:8000/api/v1/titles/";
apiAddress += "?year=&min_year=&max_year=";
apiAddress += "&genre=&genre_contains=adventure";
apiAddress += "&sort_by=-imdb_score";

fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMovie(data, "A"))
.catch(error => console.log(error))

// page 2 de la requète adventure

apiAddress += "&page=2";

fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMovieP2(data, "A"))
.catch(error => console.log(error))






// films musicaux
apiAddress = "http://localhost:8000/api/v1/titles/";
apiAddress += "?year=&min_year=&max_year=";
apiAddress += "&genre=&genre_contains=music";
apiAddress += "&sort_by=-imdb_score";

fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMovie(data, "M"))
.catch(error => console.log(error))

// page 2 de la requète music

apiAddress += "&page=2";

fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMovieP2(data, "M"))
.catch(error => console.log(error))






// films les mieux notés
apiAddress = "http://localhost:8000/api/v1/titles/";
apiAddress += "?year=&min_year=&max_year=";
apiAddress += "&sort_by=-imdb_score";

fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMovie(data, "B"))
.catch(error => console.log(error))


// page 2 de la requète best films

apiAddress += "&page=2";

fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMovieP2(data, "B"))
.catch(error => console.log(error))





// film le mieux noté
apiAddress = "http://localhost:8000/api/v1/titles/";
apiAddress += "?year=&min_year=&max_year=";
apiAddress += "&sort_by=-imdb_score";

fetch(apiAddress)
.then((resp) => resp.json())
.then(function(data) {
    let infos = data.results;
    let theGenres = data.results[0].genres;
    let theWriters = data.results[0].writers;
    let theActors = data.results[0].actors;
    let theImdb = data.results[0].imdb_score;
    let theTitle = data.results[0].title;
    let theImage = data.results[0].image_url;
    let theYear = data.results[0].year;

    document.getElementById("best_film").innerHTML = '<a href="#mod_bf" title="Lien vers la fenêtre modale"><img src="'
       + theImage + '" alt="image du film" title="' + theTitle + '" width="200" height=auto /> </a>';
      
      modal_display = '<a href="#" class="toclose">X</a> Titre: ' + theTitle;
      modal_display += '<img src="' + theImage + '" class="modal_image "alt="image du film" title="' + theTitle + '" width="200" height=auto />'
      modal_display += '<br/> Score imdb: ' + theImdb;
      modal_display += '<br/> Année: ' + theYear;
      modal_display += '<br/> Genres: '
      for (let i=0 ; i < theGenres.length ; i++){
        modal_display += theGenres[i] + ' ; '
      }
      modal_display += '<br/> Réalisateurs: '
      for (let i=0 ; i < theWriters.length ; i++){
        modal_display += theWriters[i] + ' ; '
      }
      modal_display += '<br/> Acteurs: '
      for (let i=0 ; i < theActors.length ; i++){
        modal_display += theActors[i] + ' ; '
      }
      document.getElementById("mod_bf").innerHTML = modal_display;
  
})
.catch(error => console.log(error))

