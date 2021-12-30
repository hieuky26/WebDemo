import axios from "axios";
import { useState, useEffect} from "react";
import SingleContent from "../../component/SingleContent/SingleContent";
import CustomPagination from "../../component/Pagination/CustomPagination";
import Genres from "../../component/Genres/Genres";
import useGenre from "../../component/Genres/useGenre";

const Movies = () => {

    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const genreforURL = useGenre(selectedGenres);

    const fetchMovies = async () => {

        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=8524eef3a0447c258e40035374a4c69e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        fetchMovies();
    }, [genreforURL,page])

    return (
        <div>
            <span className="pageTitle">Phim điện ảnh</span>
            <Genres 
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {content && content.map((c) =>(
                    <SingleContent 
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type="movie"
                        vote_average={c.vote_average}
                    />
                ))}
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPgaes={numOfPages}/>
            )}
        </div>
    );
};

export default Movies;
