import React from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {  API_KEY, imageUrl } from '../../Constants'
import { useEffect,useState } from 'react'
import './Rowpost.css'

function Rowpost(props) {

  const[movies,setMovies]=useState([])
  const[urlId,setUrlId]=useState('')


  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
     }).catch(err=>{
    //   alert('network error')
    })   
  }, [])


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('array empty')
      }
    })

  }
  



  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>

          {movies.map((movie)=>

              <img onClick={()=>handleMovie(movie.id)} className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="" />
             

          )}

            

        </div>
       {urlId && <Youtube opts={opts} videoId={urlId.key}/>} 
    </div>
  )
}

export default Rowpost