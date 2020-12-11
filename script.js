'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastMovie = prompt('Один из последних просмотренных фильмов?',''),
      rateMovie= prompt('На сколько оцените его?', ''),
      lastMovie2 = prompt('Один из последних просмотренных фильмов?',''),
      rateMovie2= prompt('На сколько оцените его?', '');


personalMovieDB.movies[lastMovie] = rateMovie;
personalMovieDB.movies[lastMovie2] = rateMovie2;

console.log(personalMovieDB);