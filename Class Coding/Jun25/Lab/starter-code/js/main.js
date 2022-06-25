/* --------------------------------------------------------
 * Movie Data to use during lab
 */
const movies = [
    {
        title: "Jurassic Park",
        year: 1993,
        genres: ["action", "adventure", "sci-fi"],
    },
    {
        title: "Back to the Future",
        year: 1985,
        genres: ["adventure", "comedy", "sci-fi"],
    },
    {
        title: "Aliens",
        year: 1986,
        genres: ["action", "adventure", "sci-fi"],
    },
    {
        title: "Indiana Jones and the Raiders of the Lost Ark",
        year: 1981,
        genres: ["action", "adventure"],
    },
    {
        title: "Star Wars: Episode IV - A New Hope",
        year: 1977,
        genres: ["action", "adventure", "fantasy", "sci-fi"],
    },
    {
        title: "Total Recall",
        year: 1990,
        genres: ["action", "sci-fi", "thriller"],
    },
    {
        title: "Mrs. Doubtfire",
        year: 1993,
        genres: ["comedy", "drama", "family"],
    },
    {
        title: "Hook",
        year: 1991,
        genres: ["adventure", "comedy", "family"],
    },
    {
        title: "Princess Mononoke",
        year: 1997,
        genres: ["animation", "action", "adventure"],
    },
    {
        title: "The Matrix",
        year: 1999,
        genres: ["action", "sci-fi"],
    },
    {
        title: "Star Trek II: The Wrath of Khan",
        year: 1982,
        genres: ["action", "adventure", "sci-fi"],
    },
    {
        title: "Toy Story",
        year: 1995,
        genres: ["animation", "adventure", "comedy"],
    },
    {
        title: "I am Legend",
        year: 2007,
        genres: ["action", "adventure", "drama"],
    },
];

// More code will go here later (in step 3)...

// inspect movies array
// console.table(movies);

//Part 1
// function arrayForEach(arrayInput, callbackFunction) {
//     // More code will go here later (in step 3)...
//     for (let i = 0; i < arrayInput.length; i++) {
//         callbackFunction(arrayInput[i]);
//     }
// }

// arrayForEach(movies, (element) => {
//     console.log(element);
// });

//Part 2
// let foundMovie = movies.find((movie) => {
//     return movie.title == "Total Recall";
// });

// console.log(foundMovie);

//~~~~~

// let ninetiesMovies = movies.filter((movies) => {
//     return movies.year > 1989 && movies.year < 2000;
// });

// console.log(ninetiesMovies);

//~~~~~
// let moviesWithMappedIds = movies.map((movie, index) => {
//     movie.id = index;
//     return movie;
// });

// console.log(moviesWithMappedIds);

//~~~~~

// let sortedMovies = movies.sort((a, b) => {
//     return b.year - a.year;
// });

// console.log(sortedMovies);
