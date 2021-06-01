function showMovieInfo(data, baliseModal) {
    let theTitle = data.title;
    let theImage = data.image_url;
    let theGenres = data.genres;
    let theYear = data.year;
    let theRated = data.rated;
    let theImdb = data.imdb_score;
    let theCountries = data.countries;
    //resultat box office 
    let theWriters = data.writers;
    let theActors = data.actors;
    let theDuration = data.duration;
    let theDescription = data.description;
    let theLongDescription = data.long_description;
    //baliseModal = "mod_" + filmNumber;
    refModal = "#" + baliseModal;
    modal_display = '<a href="#stopIt" class="toclose"><mark>&#x2612;</mark></a> <strong>Titre:</strong> ' 
                    + theTitle;
    modal_display += '<img src="'+theImage+'" class="modal_image" alt="image du film" title="' 
                      +theTitle+'" width="200" height=auto />'
    modal_display += '<br/> <strong>Score imdb:</strong> ' + theImdb;
    modal_display += '<br/><strong> Année:</strong> ' + theYear;
    modal_display += '<br/><strong> Durée (min):</strong> ' + theDuration;
    modal_display += '<br/><strong> Résumé:</strong> ' + theDescription + '<br/>' + theLongDescription;
    modal_display += '<br/><strong> Rated: </strong>' + theRated;
    modal_display += '<br/><strong> Pays:</strong> ';
    for (let j=0 ; j < theCountries.length ; j++){
        modal_display += theCountries[j] + ' ; '
    }
    modal_display += '<br/><strong> Genres: </strong>';
    for (let j=0 ; j < theGenres.length ; j++){
        modal_display += theGenres[j] + ' ; '
    }
    modal_display += '<br/><strong> Réalisateurs: </strong>'
    for (let j=0 ; j < theWriters.length ; j++){
        modal_display += theWriters[j] + ' ; '
    }
    modal_display += '<br/><strong> Acteurs: </strong>'
    for (let j=0 ; j < theActors.length ; j++){
        modal_display += theActors[j] + ' ; '
    }
    document.getElementById(baliseModal).innerHTML = modal_display;
      }
      

function showMoviePicture(data, aGenre, idList) {
    let i = 0;
    if (aGenre == "B"){
        i = 1;}
    for (i ; i < 5 ; i++){
        let theTitle = data.results[i].title;
        let theImage = data.results[i].image_url;
        let idFilm = data.results[i].id;
        let baliseImage = ".film" + i.toString() + aGenre;
        let refModal = "#mod_" + i.toString() + aGenre;
        let filmClass = document.querySelectorAll(baliseImage);
        for (let k = 0 ; k < 4 ; k++){
            filmClass[k].innerHTML = '<a href="'+refModal+'" class="'+idFilm+'" title="Lien vers la fenêtre modale"> &#x25B7; </a>'
                                      + '<img src="'+theImage+'" alt="image du film" title="'
                                      +theTitle+'" width="200" height=auto /> ';
        }
      idList.push(idFilm);
    }
    
}


function showMoviePicture2(data, aGenre, idList) {
    let p = 7;
    if (aGenre == "B"){
        p = 8;
    }
    for (let i = 5 ; i < p ; i++){
        let theTitle = data.results[i-5].title;
        let theImage = data.results[i-5].image_url;
        let idFilm = data.results[i-5].id;
        baliseImage = ".film" + i.toString() + aGenre;
        let refModal = "#mod_" + i.toString() + aGenre;
        let filmClass = document.querySelectorAll(baliseImage)
        for (let k = 0 ; k < 4 ; k++){
            filmClass[k].innerHTML = '<a href="'+refModal+'" class="'+idFilm+'" title="Lien vers la fenêtre modale"> &#x25B7; </a>'
            + '<img src="'+theImage+'" alt="image du film" title="'
            +theTitle+'" width="200" height=auto /> ';
        }
      idList.push(idFilm);
    }
}


let idList = [];
// requète drama
apiAddress = "http://localhost:8000/api/v1/titles/";
apiAddress += "?year=&min_year=&max_year=";
apiAddress += "&genre=&genre_contains=drama";
apiAddress += "&sort_by=-imdb_score";
fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMoviePicture(data, "D", idList))
.catch(error => console.log(error))
// page 2 de la requète drama
apiAddress += "&page=2";
fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMoviePicture2(data, "D", idList))
.catch(error => console.log(error))
// modales pour drama
for(let i=0 ; i<7 ; i++){
    let theClass = ".film" + i.toString() + "D";
    let theModal = "mod_" + i.toString() + "D";
    let pictureClick= document.querySelectorAll(theClass);
    for (let k = 0 ; k < 4 ; k++){
        pictureClick[k].addEventListener ('click', function(){
        let theLink = pictureClick[k].querySelector("a");
        let filmRef = theLink.getAttribute("class");
        let filmAddress = "http://localhost:8000/api/v1/titles/" + filmRef.toString();
        fetch(filmAddress)
        .then((resp) => resp.json())
        .then((data) => showMovieInfo(data, theModal))
        .catch(error => console.log(error))
        });
    };
}
// films d'aventures
apiAddress = "http://localhost:8000/api/v1/titles/";
apiAddress += "?year=&min_year=&max_year=";
apiAddress += "&genre=&genre_contains=adventure";
apiAddress += "&sort_by=-imdb_score";
fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMoviePicture(data, "A", idList))
.catch(error => console.log(error))
// page 2 de la requète adventure
apiAddress += "&page=2";
fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMoviePicture2(data, "A", idList))
.catch(error => console.log(error))
// modales pour adventure
for(let i=0 ; i<7 ; i++){
    let theClass = ".film" + i.toString() + "A";
    let theModal = "mod_" + i.toString() + "A";
    let pictureClick= document.querySelectorAll(theClass);
      for (let k = 0 ; k < 4 ; k++){
        pictureClick[k].addEventListener ('click', function(){
        let theLink = pictureClick[k].querySelector("a");
        let filmRef = theLink.getAttribute("class");
        let filmAddress = "http://localhost:8000/api/v1/titles/" + filmRef.toString();
        fetch(filmAddress)
        .then((resp) => resp.json())
        .then((data) => showMovieInfo(data, theModal))
        .catch(error => console.log(error))
        });
    };
}
// films musicaux
apiAddress = "http://localhost:8000/api/v1/titles/";
apiAddress += "?year=&min_year=&max_year=";
apiAddress += "&genre=&genre_contains=music";
apiAddress += "&sort_by=-imdb_score";
fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMoviePicture(data, "M", idList))
.catch(error => console.log(error))
// page 2 de la requète music
apiAddress += "&page=2";
fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMoviePicture2(data, "M", idList))
.catch(error => console.log(error))
// modale pour la musique
for(let i=0 ; i<7 ; i++){
    let theClass = ".film" + i.toString() + "M";
    let theModal = "mod_" + i.toString() + "M";
    let pictureClick= document.querySelectorAll(theClass);
      for (let k = 0 ; k < 4 ; k++){
        pictureClick[k].addEventListener ('click', function(){
        let theLink = pictureClick[k].querySelector("a");
        let filmRef = theLink.getAttribute("class");
        let filmAddress = "http://localhost:8000/api/v1/titles/" + filmRef.toString();
        fetch(filmAddress)
        .then((resp) => resp.json())
        .then((data) => showMovieInfo(data, theModal))
        .catch(error => console.log(error))
        });
    };
}
// films les mieux notés
apiAddress = "http://localhost:8000/api/v1/titles/";
apiAddress += "?year=&min_year=&max_year=";
apiAddress += "&sort_by=-imdb_score";
fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMoviePicture(data, "B", idList))
.catch(error => console.log(error))
// page 2 de la requète best films
apiAddress = "http://localhost:8000/api/v1/titles/";
apiAddress += "?year=&min_year=&max_year=";
apiAddress += "&sort_by=-imdb_score";
apiAddress += "&page=2";
fetch(apiAddress)
.then((resp) => resp.json())
.then((data) => showMoviePicture2(data, "B", idList))
.catch(error => console.log(error))
// fenêtre modale pour les meilleurs films
for(let i=1 ; i<8 ; i++){
    let theClass = ".film" + i.toString() + "B";
    let theModal = "mod_" + i.toString() + "B";
    let pictureClick= document.querySelectorAll(theClass);
      for (let k = 0 ; k < 4 ; k++){
        pictureClick[k].addEventListener ('click', function(){
        let theLink = pictureClick[k].querySelector("a");
        let filmRef = theLink.getAttribute("class");
        let filmAddress = "http://localhost:8000/api/v1/titles/" + filmRef.toString();
        fetch(filmAddress)
        .then((resp) => resp.json())
        .then((data) => showMovieInfo(data, theModal))
        .catch(error => console.log(error))
        });
    };
}
// film le mieux noté
apiAddress = "http://localhost:8000/api/v1/titles/";
apiAddress += "?year=&min_year=&max_year=";
apiAddress += "&sort_by=-imdb_score";
fetch(apiAddress)
.then((resp) => resp.json())
.then(function(data){
    let theId = data.results[0].id;
    let theTitle = data.results[0].title;
    let theImage = data.results[0].image_url;
    imageInsertion = '<a href="#mod_bf" title="Lien vers la fenêtre modale">&#x25B7;</a>'
    imageInsertion += '<img src="'+theImage+'" alt="image du film" title="' + theTitle + '" width="200" height=auto /> ';
    document.getElementById("best_film").innerHTML = imageInsertion;
    filmAddress = "http://localhost:8000/api/v1/titles/" + theId.toString();
    fetch(filmAddress)
    .then((resp) => resp.json())
    .then(function(data){
        let theGenres = data.genres;
        let theWriters = data.writers;
        let theActors = data.actors;
        let theImdb = data.imdb_score;
        let theTitle = data.title;
        let theImage = data.image_url;
        let theYear = data.year;
        let theRated = data.rated;
        let theDuration = data.duration;
        let theDescription = data.description;
        let theLongDescription = data.long_description;
        let theCountries = data.countries;
        modal_display = '<a href="#stopIt" class="toclose"><mark>&#x2612;</mark></a> <strong>Titre:</strong> ' + theTitle;
        modal_display += '<img src="'+theImage+'" class="modal_image" alt="image du film" title="' 
                          +theTitle+'" width="200" height=auto />'
        modal_display += '<br/> <strong>Score imdb:</strong> ' + theImdb;
        modal_display += '<br/> <strong>Année:</strong> ' + theYear;
        modal_display += '<br/><strong> Durée (min):</strong> ' + theDuration;
        modal_display += '<br/> <strong>Résumé:</strong> ' + theDescription + '<br/>' + theLongDescription;
        modal_display += '<br/> <strong>Rated:</strong> ' + theRated;
        modal_display += '<br/><strong> Pays:</strong> ';
        for (let j=0 ; j < theCountries.length ; j++){
            modal_display += theCountries[j] + ' ; '
        }
        modal_display += '<br/> <strong>Genres:</strong> ';
        for (let j=0 ; j < theGenres.length ; j++){
            modal_display += theGenres[j] + ' ; '
        }
        modal_display += '<br/> <strong>Réalisateurs:</strong> '
        for (let j=0 ; j < theWriters.length ; j++){
            modal_display += theWriters[j] + ' ; '
        }
        modal_display += '<br/> <strong>Acteurs:</strong> '
        for (let j=0 ; j < theActors.length ; j++){
            modal_display += theActors[j] + ' ; '
        }
        document.getElementById("mod_bf").innerHTML = modal_display;
    })
    .catch(error => console.log(error))
})
console.log(idList);