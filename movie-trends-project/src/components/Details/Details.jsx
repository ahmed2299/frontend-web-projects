import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function Details() {

  const [itemDetails, setItemDetails] = useState({})
  let params = useParams();

  let getItemDetails=async()=>{

    let {data}=await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=66811a2032ed5483081ede4423071993&language=en-US`)
    console.log(data);
    setItemDetails(data);
  }
  useEffect(() => {
    getItemDetails()
  }, [])
  
  return (
    <>
    <div className='row py-4'>
      <div className='col-md-3'>
        <img className='w-100' src={params.mediaType=='person'?`https://image.tmdb.org/t/p/original${itemDetails.profile_path}`:`https://image.tmdb.org/t/p/original${itemDetails.poster_path}`}></img>
      </div>
      <div className='col-md-9'>
        <h2>{itemDetails.title}{itemDetails.name}</h2>
        <p className='text-muted my-3'>{itemDetails.overview}{itemDetails.biography}</p>
      </div>
    </div>
    </>
  )
}
