const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies:{
       
    },
    actors: {},
    genres: [],
    privat: false

};
const a = prompt('Один из последних просмотренных фильмов', ''),
      b = +prompt(' на сколько оцените его', ''), 
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = +prompt(' на сколько оцените его', ''); 


      personalMovieDb.movies[a] = b;
      personalMovieDb.movies[c] = d;

      console.log(personalMovieDb);
