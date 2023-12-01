import React, { useEffect, useState } from "react";
import '../login/styles.css'
import imagelebron from '../../assets/image/lebron.jpg'
import imagekobe from '../../assets/image/kobe.jpg'
import imagegiannis from '../../assets/image/giannis.jpg'
import imagelilard from '../../assets/image/lilard.jpg'
import imagecurry from '../../assets/image/curry.jpg'


function Login() {
    const [currentImage, setCurrentImage] = useState(
        imagelebron
    );
    const images = [
        imagegiannis, imagekobe, imagelilard, imagelebron, imagecurry
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * images.length);
            setCurrentImage(images[randomIndex]);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="menuhomepage">

            <div className="inicio">

                <div className="login">

                    <div className="menu">

                        <div className="navbar">
                            <a href=""><p>Inicio</p></a>

                            <a href=""><p>Times</p></a>

                            <a href=""><p>Classificação</p></a>

                            <a href=""><p>Temporada</p></a>
                        </div>

                        <div className="imglebron">
                            <img src={`${currentImage}`} />
                        </div>
                    </div>
                </div>

            </div>

        </div>//body
    )
}
export default Login
