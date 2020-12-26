import './App.css' 
import requests from '../requests' 
import Row from './Row' 
import tmdb_logo from '../images/tmdb_logo.svg' 
import Banner from './Banner' 
import Nav from './Nav'

function App() {
  return (
    <div className="App">

      <Nav />

      <Banner />
      
      <div className='rows-container'>
          <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
          <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending} />
          <Row title='TOP RATED' fetchUrl={requests.fetchTopRated} />
          <Row title='ACTION MOVIES' fetchUrl={requests.fetchActionMovies} />
          <Row title='COMEDY MOVIES' fetchUrl={requests.fetchComedyMovies} />
          <Row title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} />
          <Row title='ROMANCE MOVIES' fetchUrl={requests.fetchRomanceMovies} />
          <Row title='DOCUMENTARIES' fetchUrl={requests.fetchDocumentaries} />
      </div>

      <div className='footer'>
        <label>Data source</label>
        <div>
          <img src={tmdb_logo} alt='TMDB'></img>
        </div>
      </div>
    </div>
  ) 
}

export default App 
