'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

let numberOfFilms;

do {
  numberOfFilms = Number(prompt('Сколько вы посмотрели фильмов', ''));
} while(numberOfFilms === 0);

personalMovieDB.count = numberOfFilms;

for (let i = 0; i < 2; i++) {
  const lastFilm = prompt('Один из последних просмотренных фильмов', ''),
        ratingLastFilm = prompt('На сколько оцените его', '');

  if(lastFilm != null &&
     ratingLastFilm != null &&
     lastFilm !='' &&
     ratingLastFilm != '' &&
     lastFilm.length < 50) {
    personalMovieDB.movies[lastFilm] = ratingLastFilm;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }

}

if(personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}

console.log(personalMovieDB);
