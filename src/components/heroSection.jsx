import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const PrevArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-800 bg-opacity-50 rounded-full w-10 h-10
         flex items-center justify-center cursor-pointer hover:bg-opacity-70"
        onClick={onClick}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="blue"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin=""
            className="feather feather-chevron-left bg-white"
        >
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    </div>
);

const NextArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-800 bg-opacity-50 rounded-full w-10 h-10
         flex items-center justify-center cursor-pointer hover:bg-opacity-70"
        onClick={onClick}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="blue"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right bg-white"
        >
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    </div>
);

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // active l'autoplay
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />, // Ajoute la flèche de défilement précédente
        nextArrow: <NextArrow />, // Ajoute la flèche de défilement suivante
    };
    return (
        <Slider {...settings} style={{ overflow: "hidden" }}>
            <div className="bg-iut_slide3 bg-no-repeat bg-cover bg-center">
                <div className="w-screen h-85 bg-black bg-opacity-90">
                    <div className="text-center text-white py-16 lg:py-52 px-10 lg:px-20 space-y-8 md:space-y-10">
                        <h1 className="text-1.75 md:text-3.5 font-bold">
                            Institut Universitaire de Technologie
                        </h1>
                        <p className="font-medium text-center md:text-1.5 ">
                            Haute Ecole de Gestion
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <button className="bg-bleue p-3 rounded-lg">Rejoignez-Nous</button>
                            <button className="bg-bleue p-3 rounded-lg">Contactez-Nous</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-iut_slide2  bg-no-repeat bg-cover bg-center">
                <div className="w-screen h-85 bg-black bg-opacity-90">
                    <div className="text-center text-white py-16 lg:py-52 px-10 lg:px-20 space-y-8 md:space-y-10">
                        <h1 className=" text-1.75 md:text-3.5 font-bold">
                            Institut Universitaire de Technologie
                        </h1>
                        <p className="font-medium text-center md:text-1.5 ">
                            Haute Ecole de Gestion
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <button className="bg-bleue p-3 rounded-lg">Rejoignez-Nous</button>
                            <button className="bg-bleue p-3 rounded-lg">Contactez-Nous</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-iut-slide1 bg-no-repeat bg-cover bg-center">
                <div className="w-screen h-85 bg-black bg-opacity-90">
                    <div className="text-center text-white py-16 lg:py-52 px-10 lg:px-20 space-y-8 md:space-y-10">
                        <h1 className="text-1.75 md:text-3.5 font-bold">
                            Institut Universitaire de Technologie
                        </h1>
                        <p className="font-medium text-center md:text-1.5 ">
                            Haute Ecole de Gestion
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <button className="bg-bleue p-3 rounded-lg">Rejoignez-Nous</button>
                            <button className="bg-bleue p-3 rounded-lg">Contactez-Nous</button>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
}
