'use strict';


// let numberOfFilms;

// function checkOut() {
//     numberOfFilms = +prompt('How many movies have you watched?', '');

//     while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms) == true) {
//         numberOfFilms = +prompt('How many movies have you watched?', '');
//     }
// }

// checkOut();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you watched?', '');
    
        while(personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count) == true) {
            personalMovieDB.count = +prompt('How many movies have you watched?', '');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function() {
        for ( let i = 0; i < 2; i++ ) {
            const a = prompt('Last film', ''),
                  b = prompt('Rate', '');
           
        
            if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('err');
                i--;
            }
        }    
    },
    detectPersonalLevel: function() {
        if ( personalMovieDB.count < 10 ) {
            alert('Malo');
        } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Typical');
        } else if ( personalMovieDB.count >= 30 ){
            alert('Kinoman');
        } else {
            alert('Error');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            const genre = prompt(`Your favorite genre number ${i}`, '');

            if (genre == '' || genre == null) {
                alert('Incorrect');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your ${i + 1 } favorite genre is ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if ( personalMovieDB.privat ) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

};

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function rememberMyFilms() {
//     for ( let i = 0; i < 2; i++ ) {
//         const a = prompt('Last film', ''),
//               b = prompt('Rate', '');
       
    
//         if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('err');
//             i--;
//         }
//     }    
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if ( personalMovieDB.count < 10 ) {
//         alert('Malo');
//     } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert('Typical');
//     } else if ( personalMovieDB.count >= 30 ){
//         alert('Kinoman');
//     } else {
//         alert('Error');
//     }
// }
// detectPersonalLevel();


 
// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         const g = prompt(`Your favorite gener number ${i}`, '');
//         personalMovieDB.genres[i - 1] = g;
//     }
// }

// writeYourGenres();