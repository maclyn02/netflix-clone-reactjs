import './Banner.css'
import no_image_poster from '../images/no_image.png'
import instance from '../axios'
import { useEffect, useState } from 'react'
import requests from '../requests'

const imageUrl = 'https://image.tmdb.org/t/p/w500'

function Banner() {

    const [movie, setMovie] = useState({})
    useEffect(() => {
        async function fetchData() {
            const response = await instance.get(requests.fetchTrending)
            const index = Math.floor(Math.random() * response.data.results.length-1)
            setMovie(response.data.results[index])
        }
        fetchData()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className='Banner'
            style={{
                backgroundImage: `url(${movie.backdrop_path ? imageUrl+movie.backdrop_path : no_image_poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className='banner-contents'>
                <div className='banner-title'>{ movie?.title || movie?.name || movie?.original_name }</div>
                <div className='banner-buttons'>
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <div className='banner-desc'>
                    { truncate(movie.overview,250) }
                </div>
            </div>            
            <div className='banner-fadebottom'></div>
        </header>
    )
}

export default Banner
