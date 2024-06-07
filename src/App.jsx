import React, { useEffect, useState } from 'react'
import useFetch from './components/useFetch'
import './App.css'

function App() {
  let [inputValue, setInputValue] = useState("animal")
  let apiKey = "4ed59efe"
  // let apiKey = "22b61863"


  let inputValueUpdate = ({ target: { value } }) => {

    setInputValue(value)

  }

  
  let { apidata, iserror, isloading } = useFetch(`http://www.omdbapi.com/?s=${inputValue}&apikey=4ed59efe`)

  console.log(apidata);



  return (
    <div className='main'>
      <div className="topSection">
        <input placeholder='Search movies' onChange={inputValueUpdate} type="text" />
        <h1>{isloading && "loading........."}</h1>
        <h1>{iserror && 'oops somting went wrong'}</h1>
      </div>
      <div className='content'>
        {
          apidata?.map((movie) => {
            return (
             
              <div className='card'>
                <div className='image'>
                  <img src={movie.Poster} alt="" />
                </div>
                <br />
              
                <div className="info">
                  <p><span>Title : </span>{movie.Title}</p>
                  <p>Year : {movie.Year}</p>
                  <p>Rating : </p>
                </div>
              </div>
             
            )
          })
        }
      </div>

    </div>
  )
}

export default App