import React from "react"
import Navbar from "./component/Navbar/Navbar"
import Banner from "./component/Banner/Banner"
import './App.css'
import {action,ComedyMovies,HorrorMovies,originals} from "./url"
import Rowpost from "./component/RowPost/Rowpost"

function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost id='netflix' url={originals} title='Netflix Originals'/>
      <Rowpost id='Action' url={action} title='Action' isSmall/>
      <Rowpost url={ComedyMovies} title='Comedy' isSmall/>
      <Rowpost url={HorrorMovies} title='Horror' isSmall/>
    



      
      
    </div>
  )
}

export default App
