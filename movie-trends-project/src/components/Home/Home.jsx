import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './Home.module.scss'
import Movies from "../Movies/Movies";
import Tvshows from "../Tvshows/Tvshows";
import People from "../People/People";
import { Helmet } from "react-helmet";

export default function Home() {
  const [trendingItems, setTrendingItems] = useState([]);

  useEffect(() => {
    getTrendingItems();
  }, []);

  let getTrendingItems = async () => {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=66811a2032ed5483081ede4423071993"
    );
    setTrendingItems(data.results);
  };

  return (
    <>
      {/* <div className="row my-3 py-5">

        <div className="col-md-4">
          <div className={`${styles.brdr} w-25 mb-4`}></div>
          <h3>Trending</h3>
          <h3>Movies</h3>
          <h3>To watch now</h3>
          <span className="text-muted">Most watched movies by day</span>
          <div className={`${styles.brdr} w-100 mt-4`}></div>
        </div>

        {trendingItems.map((item,index)=>
        <div key={index} className="col-md-2">
          <div className="item">
            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} className='w-100'></img>
            <h6>{item.title}{item.name}</h6>
          </div>
        </div>
        )}
        
      </div> */}
      {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> */}
      <Movies></Movies>
      <Tvshows></Tvshows>
      <People></People>
    </>
  );
}
