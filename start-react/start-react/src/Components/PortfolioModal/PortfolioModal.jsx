import React, { useEffect,useState } from "react";
import cabin from "../../images/portfolio/cabin.png";
import cake from "../../images/portfolio/cake.png";
import circus from "../../images/portfolio/circus.png";
import game from "../../images/portfolio/game.png";
import safe from "../../images/portfolio/safe.png";
import submarine from "../../images/portfolio/submarine.png";
import styles from './PortfolioModal.module.css'

export default function PortfolioModal(props) {

  const [count,updateCount]=useState(0);
  // useEffect(()=>{
  //   if(count==1){
  //     updateCount(0)
  //   }
  //   console.log(count)
  // })
  console.log(count)

  return (
    <>
       {props.portfolio == "portfolioModal1"?<div className={count==1?`portfolio-modal modal fade show portfolio-modal portfolio-modal2`:`portfolio-modal modal fade show portfolio-modal`}
       id='portfolioModal1' tabIndex='-1' aria-labelledby='portfolioModal1Label'
        aria-modal='true' role='dialog'><div className="modal-dialog modal-xl" role="document" >
       <div className="modal-content">
         <button
           className="close"
           type="button"
           data-dismiss="modal"
           aria-label="Close"
           onClick={()=>updateCount(1)}
         >
           <span aria-hidden="true">
             <svg
               className="svg-inline--fa fa-times fa-w-11"
               aria-hidden="true"
               focusable="false"
               data-prefix="fas"
               data-icon="times"
               role="img"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 352 512"
               data-fa-i2svg
             >
               <path
                 fill="currentColor"
                 d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
               ></path>
             </svg>
           </span>
         </button>

         <div className="modal-body text-center">
           <div className="container">
             <div className="row justify-content-center">
               <div className="col-lg-8">
                 <h2
                   className="portfolio-modal-title text-secondary text-uppercase mb-0"
                   id="portfolioModal1Label"
                 >
                   Log Cabin
                 </h2>
                 <div className="divider-custom">
                   <div className="divider-custom-line"></div>
                   <svg
                     className="svg-inline--fa fa-star fa-w-18 mx-3"
                     aria-hidden="true"
                     focusable="false"
                     data-prefix="fas"
                     data-icon="star"
                     role="img"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 576 512"
                     data-fa-i2svg
                   >
                     <path
                       fill="currentColor"
                       d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                     ></path>
                   </svg>
                   <div className="divider-custom-line"></div>
                 </div>

                 <img className="img-fluid rounded mb-5" src={cabin}></img>

                 <p className="mb-3">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Mollitia neque assumenda ipsam nihil, molestias magnam,
                   recusandae quos quis inventore quisquam velit asperiores,
                   vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                   Nam.
                 </p>

                 <button className="btn btn-primary" data-dismiss="modal">
                   <svg
                     className="svg-inline--fa fa-times fa-w-11 fa-fw"
                     aria-hidden="true"
                     focusable="false"
                     data-prefix="fas"
                     data-icon="times"
                     role="img"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 352 512"
                     data-fa-i2svg
                   >
                     <path
                       fill="currentColor"
                       d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                     ></path>
                   </svg>
                   Close Window
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     </div>:''}

      
    </>
  );
}

        {/*<div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <svg
                  className="svg-inline--fa fa-times fa-w-11"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="times"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 512"
                  data-fa-i2svg
                >
                  <path
                    fill="currentColor"
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                  ></path>
                </svg>
              </span>
            </button>

            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2
                      className="portfolio-modal-title text-secondary text-uppercase mb-0"
                      id="portfolioModal1Label"
                    >
                      Log Cabin
                    </h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <svg
                        className="svg-inline--fa fa-star fa-w-18 mx-3"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                      <div className="divider-custom-line"></div>
                    </div>

                    <img className="img-fluid rounded mb-5" src={cabin}></img>

                    <p className="mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>

                    <button className="btn btn-primary" data-dismiss="modal">
                      <svg
                        className="svg-inline--fa fa-times fa-w-11 fa-fw"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="times"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 352 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                        ></path>
                      </svg>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}