import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                <div className="home__row">
                    <Product
                        id="123456789"
                        title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
                        price={1000}
                        image="https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg"
                        rating={5}
                    />
                    <Product
                        id="123056089"
                        title="Mathey-Tissot Analog Black Dial Men's Watch-H901AN"
                        price={200}
                        image="https://images-na.ssl-images-amazon.com/images/I/61x1hbzwXrL._UL1440_.jpg"
                        rating={4}
                    />
                    <Product
                        id="456789001"
                        title="
                        Inalsa Power Blender MERAK-2000W with 100% Pure Copper Motor & Variable Speed| 8 Leaf High-Quality Stainless-Steel Blade| Includes BPA-Free Tritan Jar"
                        price={85}
                        image="https://images-na.ssl-images-amazon.com/images/I/61Oos0SxjPL._SL1200_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="234567891"
                        title="Lenovo Legion 5i 10th Gen Intel Core i7 15.6 inch Full HD Gaming Laptop (16GB/1TB HDD + 256GB SSD/Windows 10/120 Hz/NVIDIA GTX 1650Ti 4GB GDDR6 Graphics/Phantom Black)"
                        price={1200}
                        image="https://images-na.ssl-images-amazon.com/images/I/61p3lA4N3uL._SL1000_.jpg"
                        rating={4}
                    />
                    <Product
                        id="987654321"
                        title="Cracking the Coding Interview. The Data Structures & Algorithms Interview Questions You'll Be Asked Most Likely In Your Interviews"
                        price={10}
                        image="https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="985604221"
                        title="HONOR Band 5 (MidnightNavy)- Waterproof Full Color AMOLED Touchscreen, SpO2 (Blood Oxygen), Music Control, Watch Faces Store, up to 14 Day Battery Life"
                        price={30}
                        image="https://images-na.ssl-images-amazon.com/images/I/810jwmTfQML._SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="765432198"
                        title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
                        price={50}
                        image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
                        rating={3}
                    />
                    <Product
                        id="654321002"
                        title="OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
                        price={360}
                        image="https://images-na.ssl-images-amazon.com/images/I/81kmtB1326L._SL1500_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
