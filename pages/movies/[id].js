import {useRouter} from 'next/router'
import {getMovieById} from "../../actions";

const Movie = (props) => {
  const router = useRouter();
  const {id} = router.query;
  const {movie} = props;

  return (
    <div className="container">
      <h1 color="red">Movie with id: {id}</h1>
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4"/>
        <p>{movie.genre}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
      <p className="desc-text">{movie.descLong}</p>
      <style jsx>{`
        .desc-text {
          font-size: 18px;
        }
      `}</style>
    </div>
  )
}

// here query is destructured from context
Movie.getInitialProps = async ({query}) => {
  const {id} = query.id;
  const movie = await getMovieById(query.id);
  return {movie}
};

export default Movie