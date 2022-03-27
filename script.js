// "use strict";
// const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели', '');

// const personalMovieDb = {
//     count: numberOfFilms,
//     movies:{
       
//     },
//     actors: {},
//     genres: [],
//     privat: false

// };
// // const a = prompt('Один из последних просмотренных фильмов', ''),
// //       b = +prompt(' на сколько оцените его', ''), 
// //       c = prompt('Один из последних просмотренных фильмов', ''),
// //       d = +prompt(' на сколько оцените его', ''); 


// //       personalMovieDb.movies[a] = b;
// //       personalMovieDb.movies[c] = d;

// //       console.log(personalMovieDb);
  
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//           b = +prompt(' на сколько оцените его', '');
    
          
//     if (a != null && b != null && a!='' && b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('done');
//     }else{
//         console.log('error');
//         i--;
//     }
    
// }
// console.log(personalMovieDb);

// if (personalMovieDb.count < 10) {
//     console.log('маловато');
    
// }else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30 ) {
//     console.log('норм');
// }else if(personalMovieDb.count >= 30) {
//     console.log('киноман');
// }else {
//     console.log('errror');
// }




// "use strict";



// const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres:[],
//     privat: false 
// };


// if (personalMovieDB.count < 10) {
//     alert('просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     alert ('Вы киноман');
// } else {
//     alert('Произошла ошибка');
// }
// console.log(personalMovieDB);




// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = +prompt('На сколько оцените его?', '');

//     (a !='' && b !='' && a != null && b != null && a.length < 50) ? 
//         personalMovieDB.movies[a] = b : i--;
    
// }

// (personalMovieDB.count < 10) ? 
//     console.log('просмотрено довольно мало фильмов') : 
// (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? 
//     console.log('Вы классический зритель') :
// (personalMovieDB.count > 30) ? 
//     console.log('Вы киноман') : console.log('Произошла ошибка');

//     console.log(personalMovieDB);


// let numberOfFilms; 
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
//     }
// }
// start();
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres:[],
//     privat: false 
// };

// function rememmbrMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '');
//         const b = +prompt('На сколько оцените его?', '');
        
    
//         if(a != '' && b != '' && a != null && b != null && a.length < 50) {
//             console.log('done');
//             personalMovieDB.movies[a] = b;
//         }else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// rememmbrMyFilms();

// function detectTersonalLevel() {
//         if (personalMovieDB.count < 10) {
//         alert('просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count > 30) {
//         alert ('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// }
// detectTersonalLevel();


// function showMyDb(hidden) {
//     if(!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDb(personalMovieDB.privat);

// function writeYouGeneres() {
//     for (let i = 1; i <=3; i++) {
//         const gener = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = gener;
//     }
// }
// writeYouGeneres();

"use strict";
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres:[],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели', '');
        while ( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели', '');
       }
    },
    rememmbrMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('На сколько оцените его?', '');
            
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                console.log('error');
                i--;
            }
        }
    
       
    },
    detectPersonalLevel: function() {
        (personalMovieDB.count< 10) ? 
            console.log('просмотрено довольно мало фильмов') :
        (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) ?
            console.log('Вы классический зритель'):
        (personalMovieDB.count >=30) ?
            console.log('Вы киноман'):
    console.log('Errorrrr');
    },
    showMyDb: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        (personalMovieDB.privat)? personalMovieDB.privat = false : personalMovieDB.privat = true;  
    },
    writeYouGeneres:() => {
        // for (let i = 1; i <=3; i++) {
        //     let gener = prompt(`Ваш любимый жанр под номером ${i}`);
        //     if(gener ===null || gener === '') {
        //         console.log('Вы ввели не корректные данные');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = gener;
        //     }
        // }
        // personalMovieDB.genres.forEach((item, i) => {
        //     console.log(`Любимый жанр ${i + 1} - это ${item}`);
        // });

        for (let i = 1; i < 2; i++) {
            let geners = prompt(`введите любимые жанры через запятую`).toLowerCase();
            if (geners === null || geners === '') {
                console.log('ввели не коректно');
                i--;
            } else {

                personalMovieDB.genres = geners.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });

      
    }
};


