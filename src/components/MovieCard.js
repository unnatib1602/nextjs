function Movie(movieName,moviePoster,movieReleaseYear,movieRating){
    this.movieName=movieName;
    this.moviePoster=moviePoster;
    this.movieReleaseYear=movieReleaseYear;
    this.movieRating=movieRating;
    }

const MovieCard =() =>{
    const myName="Unnati"
    const movie1=new Movie("Inception","https://www.aceshowbiz.com/images/still/inception_poster19.jpg",2010,4);
    const movie2=new Movie("3 Idiots","https://c8.alamy.com/comp/P4APGH/original-film-title-3-idiots-english-title-3-idiots-film-director-rajkumar-hirani-year-2009-credit-eros-international-media-album-P4APGH.jpg",2009,5);
    return(
        <div>
    <div>
    <div>
    <img src="https://www.aceshowbiz.com/images/still/inception_poster19.jpg" height="30px" width="30px"/>
    </div>
    <h3>{movie1.movieName}</h3>
    <h3>{movie1.movieReleaseYear}</h3>
    <h3>{movie1.movieRating}</h3>
    </div>
    <div>
    <div>
    <img src="https://c8.alamy.com/comp/P4APGH/original-film-title-3-idiots-english-title-3-idiots-film-director-rajkumar-hirani-year-2009-credit-eros-international-media-album-P4APGH.jpg" height="30px" width="30px"/>
    </div>
    <h3>{movie2.movieName}</h3>
    <h3>{movie2.movieReleaseYear}</h3>
    <h3>{movie2.movieRating}</h3>
    </div>
    </div>
)
}

export default MovieCard