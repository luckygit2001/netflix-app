import React, { useEffect,useState } from 'react'
import axios from '../../Axios'
import { API_KEY ,imageUrl} from '../../Constants'
import './Banner.css'

function Banner() {

  const[movie,setMovie] =useState()

 
  
useEffect(() => {
  
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results)
    setMovie(response.data.results[ Math.floor(Math.random()*response.data.results.length-1)])
  })
}, [])

  
  return (
    <div
    style={{backgroundImage:`url(${movie ?imageUrl+movie.backdrop_path: "" } ) ` }}
     className='banner'>
        <div className='banner_content'>

            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <h1 className='title'>{movie ? movie.name : ""}</h1>
            <div className='banner_button'>

                <button className='button'>Play</button>
                <button className='button'>My List</button>

            </div>
            
            <h1 className='banner_des'>{movie ? movie.overview:""}</h1>

        </div>

        <div className='fade_bottom'></div>
        
    </div>
  )
}

export default Banner