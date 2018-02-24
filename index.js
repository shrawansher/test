console.log("WELCOME TO MOVIE MATTERS");

/*
     GLOBAL LAYOUT CONSTANTS
*/
var width = 1000;
var height = 450;
var margin = { top: 20, right: 15, bottom: 30, left: 50 };

var w = width - margin.left - margin.right;
var h = height - margin.top - margin.bottom;


/*
    GLOBAL DATA-RELATED VARIABLES
    Useful to access variables and data for scales and viz
*/
var dataset;

var avgImdbRating;
var avgMyRating;

var yearExtent;
var runtimeExtent;
var revenueExtent;

var countRecords;

var genres;
var genresSelected={};

var maxCount;
/*
    GLOBAL FILTER-RELATED VARIABLES
    To keep track of patterns and current selections on filters
*/


//start with the type set to all, changes this variable everytime the dropdown for type is changed
var patt = new RegExp("all"); //For TYPE filter



/*
     READ DATA AND RELATED VARIABLES

Column Names in Dataset:
film_id       title   cast        my_title  
my_rating     budget    id          imdb_id   
original_language overview  poster_path     revenue   
runtime       votes   imdb_rating     year  
genre 