import axios from "axios";
import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { MediaContext } from "../Context/MediaContext";

export default function People() {
  let {trendingPersons} = useContext(MediaContext)


  return (
    <>
      <div className="row my-3 py-5">
        <div className="col-md-4">
          <div className="brdr w-25 mb-4"></div>
          <h3>Trending</h3>
          <h3>People</h3>
          <h3>To watch now</h3>
          <span className="text-muted">Most watched movies by day</span>
          <div className="brdr w-100 mb-4"></div>
        </div>
        {trendingPersons.slice(0, 10).map((item, index) => (
          <div key={index} className="col-md-2">
            <Link
              className="nav-link"
              to={`/details/${item.id}/${item.media_type}`}
            >
              <div className="item position-relative">
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                      : "https://image.tmdb.org/t/p/original/sNuYyT8ocLlQr3TdAW9CoKVbCU8.jpg"
                  }
                  className="w-100"
                ></img>
                <h2 className="h6">{item.name}</h2>
                <span className="position-absolute top-0 end-0 p-2 bg-info">
                  {item.popularity.toFixed(1)}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
