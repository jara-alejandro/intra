import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imag from './BN1.JPG';
import imag2 from './BN2.JPG';
import imag3 from './BN3.JPG';
import './Imagenes.css';

export default class Imagenes extends Component {
    constructor() {
        super();
        this.state = {}


    }

    render() {
        return (
            <div ClassName ="Fondo">
                
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imag}
                        alt="First slide"
                    />
                    <Carousel.Caption className="Caption">
                        <h3  className="LetraColor" >Primer Slide</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imag2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3  className="LetraColor">Segundo Slide</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imag3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3  className="LetraColor">Tercer Slide</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            </div>
        );
    }

}