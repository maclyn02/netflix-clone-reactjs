import React, { useEffect, useState } from 'react'
import instance from '../axios'
import './Row.css'
import no_image_poster from '../images/no_image.png'

const imageUrl = 'https://image.tmdb.org/t/p/w500'

function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const response = await instance.get(fetchUrl)
            setMovies(response.data.results)
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className='Row'>
            <h2>{title}</h2>
            <div className='movies-container'>
                {movies.map(movie => (
                    <img
                        className={`poster ${isLargeRow && 'posterLarge'}`}
                        key={movie.id}
                        src={`${imageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title ? movie.title : movie.original_name}
                        onError={(event)=>{event.target.src=no_image_poster}}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
