import React, { useEffect, useState } from 'react'
import instance from '../axios'
import './Row.css'
import no_image_poster from '../images/no_image.png'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const imageUrl = 'https://image.tmdb.org/t/p/w500'

function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        async function fetchData(){
            const response = await instance.get(fetchUrl)
            setMovies(response.data.results)
        }
        fetchData()
    }, [fetchUrl])

    const video_opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    const openTrailer = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        }
        else {
            const release_year = new Date(movie?.first_air_date || movie?.release_date).getFullYear()
            movieTrailer((movie?.name || movie?.title || movie?.original_name || ''), release_year)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className='Row'>
            <h2>{title}</h2>
            <div className='movies-container'>
                {movies.map(movie => (
                    <img
                        className={`poster ${isLargeRow && 'posterLarge'}`}
                        key={movie.id}
                        src={
                            ((isLargeRow && !movie.poster_path) || (!isLargeRow && !movie.backdrop_path))
                                ? no_image_poster
                                : `${imageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`
                        }
                        alt={movie?.title || movie?.name || movie?.original_name}
                        onClick={() => openTrailer(movie)}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={video_opts} />}
        </div>
    )
}

export default Row
