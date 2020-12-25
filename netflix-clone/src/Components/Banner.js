// import React, { useEffect, useState } from 'react'
import './Banner.css'
import no_image_poster from '../images/no_image.png'

function Banner() {

    // const [movies, setMovies] = useState([])
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await instance.get(requests.fetchTrending)
    //         setMovies(response.data.results)
    //     }
    //     fetchData()
    // }, [])

    return (
        <header className='Banner'> {/* bg image */}
            {/* { movies.title } */}
            <div>
                <button>Watch</button>
                <button>Add To Playlist</button>
            </div>
            <div>
                {/* description */}
            </div>
        </header>
    )
}

export default Banner
