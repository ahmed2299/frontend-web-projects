import axios from "axios";
import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { MediaContext } from "../Context/MediaContext";
import {Helmet} from "react-helmet";


export default function Tvshows() {
  let {trendingTvs} = useContext(MediaContext)


  return (
    <>
      <div className="row my-3 py-5">
        <div className="col-md-4">
          <div className="brdr w-25 mb-4"></div>
          <h3>Trending</h3>
          <h3>Tv</h3>
          <h3>To watch now</h3>
          <span className="text-muted">Most watched Tvs by day</span>
          <div className="brdr w-100 mb-4"></div>
        </div>
        {trendingTvs.slice(0, 10).map((item, index) => (
          <div key={index} className="col-md-2">
            <Link
              className="nav-link"
              to={`/details/${item.id}/${item.media_type}`}
            >
              <div className="item position-relative">
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  className="w-100"
                ></img>
                <h2 className="h6">{item.name}</h2>
                <span className="position-absolute top-0 end-0 p-2 bg-info">
                  {item.vote_average.toFixed(1)}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
