import React, { useEffect, useState } from "react";
import cabin from "../../images/portfolio/cabin.png";
import cake from "../../images/portfolio/cake.png";
import circus from "../../images/portfolio/circus.png";
import game from "../../images/portfolio/game.png";
import safe from "../../images/portfolio/safe.png";
import submarine from "../../images/portfolio/submarine.png";

export default function Portfolio() {


  return (
    <>

      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <div className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </div>

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
          <div className="row justify-content-center">
            <div
              className="col-md-6 col-lg-4 mb-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal1"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <svg
                      className="svg-inline--fa fa-plus fa-w-14 fa-3x"
                      aria-hidden="true"
                      fucusable="false"
                      data-prefix="fas"
                      data-icon="plus"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <img className="img-fluid" src={cabin}></img>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="container">
                      <div className="row justify-content-center text-center">
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
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img className="img-fluid rounded mb-5" src={cabin}></img>
                    <p className="mb-3 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer m-auto">
                    <button
                      type="button "
                      className="btn btn-primary"
                      aria-label="Close"
                      data-bs-dismiss="modal"
                    >
                      X Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal2"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <svg
                      className="svg-inline--fa fa-plus fa-w-14 fa-3x"
                      aria-hidden="true"
                      fucusable="false"
                      data-prefix="fas"
                      data-icon="plus"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <img className="img-fluid" src={cake}></img>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="container">
                      <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                          <h2
                            className="portfolio-modal-title text-secondary text-uppercase mb-0"
                            id="portfolioModal2Label"
                          >
                            Log cake
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
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img className="img-fluid rounded mb-5" src={cake}></img>
                    <p className="mb-3 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer m-auto">
                    <button
                      type="button "
                      className="btn btn-primary"
                      aria-label="Close"
                      data-bs-dismiss="modal"

                    >
                      X Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal3"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <svg
                      className="svg-inline--fa fa-plus fa-w-14 fa-3x"
                      aria-hidden="true"
                      fucusable="false"
                      data-prefix="fas"
                      data-icon="plus"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <img className="img-fluid" src={circus}></img>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal3"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="container">
                      <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                          <h2
                            className="portfolio-modal-title text-secondary text-uppercase mb-0"
                            id="portfolioModal3Label"
                          >
                            Log circus
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
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img className="img-fluid rounded mb-5" src={circus}></img>
                    <p className="mb-3 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer m-auto">
                    <button
                      type="button "
                      className="btn btn-primary"
                      aria-label="Close"
                      data-bs-dismiss="modal"

                    >
                      X Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal4"
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal4"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <svg
                      className="svg-inline--fa fa-plus fa-w-14 fa-3x"
                      aria-hidden="true"
                      fucusable="false"
                      data-prefix="fas"
                      data-icon="plus"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <img className="img-fluid" src={game}></img>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal4"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="container">
                      <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                          <h2
                            className="portfolio-modal-title text-secondary text-uppercase mb-0"
                            id="portfolioModal4Label"
                          >
                            Log game
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
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img className="img-fluid rounded mb-5" src={game}></img>
                    <p className="mb-3 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer m-auto">
                    <button
                      type="button "
                      className="btn btn-primary"
                      aria-label="Close"
                      data-bs-dismiss="modal"

                    >
                      X Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal5"
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal5"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <svg
                      className="svg-inline--fa fa-plus fa-w-14 fa-3x"
                      aria-hidden="true"
                      fucusable="false"
                      data-prefix="fas"
                      data-icon="plus"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <img className="img-fluid" src={safe}></img>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal5"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="container">
                      <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                          <h2
                            className="portfolio-modal-title text-secondary text-uppercase mb-0"
                            id="portfolioModal5Label"
                          >
                            Log safe
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
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img className="img-fluid rounded mb-5" src={safe}></img>
                    <p className="mb-3 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer m-auto">
                    <button
                      type="button "
                      className="btn btn-primary"
                      aria-label="Close"
                      data-bs-dismiss="modal"

                    >
                      X Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal6"
            >
              <div
                className="portfolio-item mx-auto"
                data-toggle="modal"
                data-target="#portfolioModal6"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <svg
                      className="svg-inline--fa fa-plus fa-w-14 fa-3x"
                      aria-hidden="true"
                      fucusable="false"
                      data-prefix="fas"
                      data-icon="plus"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg
                    >
                      <path
                        fill="currentColor"
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <img className="img-fluid" src={submarine}></img>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal6"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="container">
                      <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                          <h2
                            className="portfolio-modal-title text-secondary text-uppercase mb-0"
                            id="portfolioModal6Label"
                          >
                            Log submarine
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
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img className="img-fluid rounded mb-5" src={submarine}></img>
                    <p className="mb-3 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                  </div>
                  <div className="modal-footer m-auto">
                    <button
                      type="button "
                      className="btn btn-primary"
                      aria-label="Close"
                      data-bs-dismiss="modal"

                    >
                      X Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
