import MovieCard from '../components/MovieCard';
import './globals.css';

export default function Home() {
  return (
    <>
      <h1 className="main-heading">Movie List</h1>
      <div className="movie-container">
        <MovieCard
          poster="https://i.etsystatic.com/10683147/r/il/d4a024/4900691314/il_1080xN.4900691314_fu21.jpg"
          title="Oppenheimer"
          rating="★★★☆☆"
          date="21 July"
          year="2023"
        />
        <MovieCard
          poster="https://c8.alamy.com/comp/2JKYD0T/movie-poster-inception-2010-2JKYD0T.jpg"
          title="Inception"
          rating="★★★★☆"
          date="16 July"
          year="2010"
        />
      </div>
    </>
  );
}

