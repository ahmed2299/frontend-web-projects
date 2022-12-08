import React, { Component, useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import {Link} from 'react-router-dom'
import Portfolio from "../Portfolio/Portfolio";

export default function NavBar() {
  let [ofset, changeOffset] = useState("");
  let [activeportfolio,activePortfolio]=useState("")
  let [activeabout,activeAbout]=useState("")
  let [activecontact,activeContact]=useState("")
  let [displayArrow,setDisplayArrow]=useState('')
  useEffect(()=>{
    window.addEventListener("scroll", () => {
        if (window.scrollY < 50) {
          changeOffset("");
        } else {
          changeOffset("navbar-shrink");
      }
      
      let portfolioHeight=document.getElementById('portfolio').offsetTop
      let contactHeight=document.getElementById('contact').offsetTop
      let aboutHeight=document.getElementById('about').offsetTop
      let mainNavHeight=document.getElementById('mainNav').offsetHeight 

      if(window.scrollY<portfolioHeight-mainNavHeight){
        setDisplayArrow('d-none')
      }
      else{
        setDisplayArrow('d-block')
      }
      if(window.scrollY<portfolioHeight-mainNavHeight){
        activePortfolio('')
        activeAbout('')
        activeContact('')
      }
      else if(window.scrollY>=portfolioHeight-mainNavHeight
      &&window.scrollY<=aboutHeight-mainNavHeight){
        activePortfolio('active')
        activeAbout('')
        activeContact('')
      }
      else if(window.scrollY>=aboutHeight-mainNavHeight&&
        window.scrollY<=contactHeight-mainNavHeight){
        activePortfolio('')
        activeAbout('active')
        activeContact('')      }
      else if(window.scrollY>contactHeight-mainNavHeight){
        activePortfolio('')
        activeAbout('')
        activeContact('active')      }
    });
  })

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-secondary text-uppercase fixed-top ${ofset}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#">
            start react
          </a>
          <button
            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className={`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${activeportfolio}`}
                  aria-current="page"
                  href='#portfolio'
                >
                  portfolio
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className={`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${activeabout}`}
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className={`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${activecontact}`}
                  aria-current="page"
                  href="#contact"
                >
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="scroll-to-top position-fixed">
            <a class={`js-scroll-trigger ${displayArrow} text-center rounded`} href="#page-top">
            <i class="fa-solid fa-arrow-up"></i>
              </a>
        </div>
    </>
  );
}
