import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import Carrossel1 from '../../assets/login_pets5.jpeg';
import Carrossel2 from '../../assets/home-page3.jpg';
import Carrossel3 from '../../assets/register_pets.jpg';

export default function Carrossel() {
    return (
        <>
            <Carousel className="container-carrossel">
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={Carrossel2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={Carrossel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={Carrossel1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}