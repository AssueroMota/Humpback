import React, { useState } from "react";

import arrow_left from '../../assets/img/movies/arrow_left.svg'
import arrow_right from '../../assets/img/movies/arrow_right.svg'
import movie from '../../assets/img/movies/movie.mp4'
import movieSea from '../../assets/img/movies/movieSea.mp4'
import movieCar from '../../assets/img/movies/movieCar.mp4'
import movieMobile from '../../assets/img/movies/movieMobile.mp4'
import movieSeaMobile from '../../assets/img/movies/movieSeaMobile.mp4'
import movieCarMobile from '../../assets/img/movies/movieCarMobile.mp4'
import PlayMovie from '../../assets/img/movies/videos__play.svg'

const Movies = ({ MtitleOne, MSpan, MtitleTwo, Mparagraph }) => {
    const videos = [
        movie,
        movieCar, 
        movieSea,
    ];
    const videosMobile = [
        movieMobile,
        movieCarMobile, 
        movieSeaMobile,
    ];
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? videos.length - 1 : prevIndex - 1
        );
    };
    const movieMain = window.innerWidth > 1024 ? videos : videosMobile;
    return (
        <div id="Movies-main" className="Movies-container">
            <div className="Movies-container-2">
                <div className="Movies-imgs">
                    <div className="Banner">
                        <video
                            className={`Movies-Banner MoviesTwo`}
                            autoPlay
                            muted
                            loop
                            key={movieMain[index]}
                        >
                            <source src={movieMain[index]} type="video/mp4" />
                        </video>
                        <img
                            className="PlayButton"
                            src={PlayMovie}
                            alt=""
                            onClick={nextSlide}
                        />

                        <div className="Movie-Arrow">
                            <img
                                className="Movie-Arrow-left"
                                src={arrow_left}
                                alt=""
                                onClick={prevSlide}
                                data-aos="fade-up-left"
                            />
                            <img
                                className="Movie-Arrow-right"
                                src={arrow_right}
                                alt=""
                                onClick={nextSlide}
                                data-aos="fade-up-left"
                            />
                        </div>
                    </div>
                </div>

                <div className="Movies-Text">
                    <div className="Movies-Text-2">
                        <h2 className="Movies-title" data-aos="fade-down-right">
                            {MtitleOne} <span className="Movies-Span">{MSpan}</span>{" "}
                            {MtitleTwo}
                        </h2>
                        <p className="Movies-paragraph" data-aos="fade-up-right">
                            {Mparagraph}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movies;
