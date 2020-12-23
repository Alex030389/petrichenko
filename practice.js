'use strict';
let numberOfFilms;

function start() {  
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = Number(prompt('Сколько вы посмотрели фильмов', ''));    
  }
}
start();

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

personalMovieDB.count = numberOfFilms;

function rememberMyFilsm() {
  for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов', ''),
          ratingLastFilm = prompt('На сколько оцените его', '');
  
    if(lastFilm != null &&
       ratingLastFilm != null &&
       lastFilm !='' &&
       ratingLastFilm != '' &&
       lastFilm.length < 50) {
      personalMovieDB.movies[lastFilm] = ratingLastFilm;
    } else {
      console.log('error');
      i--;
    }
  }
}
rememberMyFilsm();

function detectPersonalLevel() {
  if(personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

detectPersonalLevel();

function writeYourGenres() {
  for(let i = 1; i <= 3; i++) {
    personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`))
  }
}
writeYourGenres();

function showMyDB(hidden) {
  if(!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);
