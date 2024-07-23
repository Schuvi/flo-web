import React, {useState} from "react";
import flo1 from '../../assets/flo1.jpg';
import flo2 from '../../assets/flo2.jpg';
import flo3 from '../../assets/flo3.jpg';
import flo4 from '../../assets/flo4.jpg';
import flo5 from '../../assets/flo5.jpg';
import flo6 from '../../assets/flo6.jpg';
import flo7 from '../../assets/flo7.jpg';
import flo8 from '../../assets/flo8.jpg';

export default function InstaFlo() {
    const [like, isLike] = useState(
        <>
            <i className="fa-regular fa-heart"></i>
        </>
    );
    const [click, setClick] = useState(false)

    const redHeart = (e) => {
        e.preventDefault()
        setClick(true)
        if (click == true) {
            console.log(click)
            isLike(
                <>
                    <i class="fa-solid fa-heart" style={{color: '#ff0000'}}></i>
                </>
            )
            setClick(false)
        } else {
            isLike(
                <>
                    <i className="fa-regular fa-heart"></i>
                </>
            )
        }
    }

    const Card = ({ image, caption, like }) => (
        <div className="border-none border-black w-full w-[40vw] h-[70vh] md:w-[40vw] md:h-[45vh] lg:w-[25vw] lg:h-[50vh] xl:h-[55vh] rounded-lg hover:-translate-y-2 transition relative overflow-hidden m-2 shadow-md">
            <div className="relative w-full h-[50vh] md:h-[30vh]">
                <img src={image} alt="card" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-5">
                <h1 className="mb-4 lg:mb-16 text-lg font-semibold">{caption}</h1>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                        <button onClick={redHeart}>{like}</button>
                        <button>
                            <i className="fa-regular fa-comment"></i>
                        </button>
                        <button>
                            <i className="fa-solid fa-share"></i>
                        </button>
                    </div>
                    <a href="https://www.instagram.com/jkt48.flora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-blue-600 hover:underline" target="_blank">@jkt48.flora</a>
                </div>
            </div>
        </div>
    );
    
    const captions = [
        "♡₊˚ 🫐・₊✧",
        "Selamat buka puasa yaa ! ☆",
        "Hi",
        "🎬",
        "JKT48 12th! Flowe12ful 🌹✨",
        "青空片想い"
    ];

    const images = [flo5, flo3, flo4, flo8, flo6, flo7];

    return (
        <div className="container mx-auto p-4 flex flex-wrap justify-center">
            {images.map((image, index) => (
                <Card key={index} image={image} caption={captions[index]} like={like}/>
            ))}
        </div>
    );
}
