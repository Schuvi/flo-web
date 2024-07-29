import React, {useState, useRef, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import floraImage from '../../../assets/flora2.jpeg';
import floraImage1 from '../../../assets/Flora JKT48 (1).jpeg';
import floraImage2 from '../../../assets/Flora JKT48.jpeg';
import floraImage3 from '../../../assets/flora_shafiq.jpg';
import floraImage4 from '../../../assets/showroom flora.jpeg';
import jikoflora from '../../../assets/jiko flora.mp3';
import floraVideo from '../../../assets/flora cover.mp4';
import Typewriter from 'typewriter-effect';
import axios from "axios";
import { useSpring, animated } from "react-spring";
import LazyLoad from "react-lazyload";
import InstaFlo from "../../insta/insta";

export default function Home() {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(true);
    const [textButton, setButton] = useState(
        <>
            <i class="fa-solid fa-play mr-1"></i> Jiko Flora
        </>
    );
    const audioRef = useRef(null);

    const Number = ({ n }) => {
        const {number} = useSpring({
            from: {number: 0},
            number: n,
            delay: 400,
            config: {mass: 4, tension: 50, friction: 50},
        });
        return (
            <animated.div>{number.to((n) => n.toFixed((0)))}</animated.div>
        )
    }

    const audio = () => {
        if (audioRef.current) {
            if (isPlaying == false) {
                audioRef.current.pause();
                setButton(
                    <>
                        <i class="fa-solid fa-play mr-1"></i> Jiko Flora
                    </>
                )
            } else if (isPlaying == true) {
                audioRef.current.play();
                setButton(
                    <>
                        <i class="fa-solid fa-pause mr-1"></i> Jiko Flora
                    </>
                )
            }
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <>
            <div className="container mx-auto flex flex-row flex-wrap justify-center items-center w-full min-h-[40vh] h-[70vh] md:h-[40vh] max-h-[100vh] p-3 md:pl-16 md:pt-5 lg:h-[70vh]">
                <div className="image-wrapper flex md:justify-center md:items-center h-full w-1/2 md:w-1/3">
                    <img src={floraImage} alt="foto Flowa" className="w-full h-full rounded object-contain"/>
                </div>

                <div className="container text-center h-auto w-1/2">
                    <h1 className="ml-3 md:ml-5 text-3xl md:text-4xl lg:ml-[7vw] text-center sm:text-center  font-bold mb-3">The Blooming Flower</h1>
                    <Typewriter 
                        options={{ 
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: ['Ada yang mau ikut aku?', 'Ayo ikut ke dunia Flora', 'Simsalabim', 'Akan ku buat...', 'Kamu!', 'Menjadi berbunga-bunga 🌸'],
                            cursor: '|',
                            wrapperClassName: 'text-xl ml-3 md:ml-5 lg:ml-[7vw] text-center',
                            deleteSpeed: 10  
                        }}
                    />
                </div>
            </div>
            <br id="about"/>
            <br />
            
            <section className="bg-gothic_2 flex justify-center">
                <div className="container flex flex-col md:flex-row justify-center items-center w-full p-5 min-h-[20vh] h-fit">
                    <div className="container w-full lg:w-1/2 flex justify-center">
                        <img src={floraImage3} alt="Kabesha Flora" className="rounded-lg w-[28vw] md:w-[20vw] shadow-2xl mb-3"/>
                    </div>

                    <div className="container w-full flex flex-col text-center justify-center ">
                        <h1 className="font-bold text-[1.3rem] lg:text-3xl mb-1 lg:mb-4">Flora Shafiqa Riyadi</h1>
                        <p className="text-[0.75rem] lg:text-base mb-4">
                        Flora Shafiqa, anggota generasi 8 JKT48, telah menarik perhatian penggemar sejak bergabung pada tahun 2019. Kini berusia 19 tahun, Flora mengalami banyak perubahan, termasuk penampilan yang semakin anggun. Dia dulunya tampil dengan image tomboy dan rambut bondol, tetapi sekarang penampilannya lebih girly. Flora aktif di JKT48 sejak 27 April 2019 dan memiliki akun Instagram @jkt48.flora. Bersama dengan member generasi 8 lainnya, Flora diperkenalkan ke publik pada 27 April 2019.
                        </p>

                        <div className="flex justify-center h-[4vh] mb-3">
                            <button type="button" id="btn" className="btn text-[0.8rem] font-bold border border-black border-solid w-1/2 self-middle hover:bg-gothic_5 hover:text-white" onClick={audio}>
                                {textButton}
                            </button>
                            <audio ref={audioRef} src={jikoflora} className="jiko"></audio>
                        </div>

                        <div className="flex flex-row w-full ml-2 justify-center">
                            <a href="https://x.com/S_FloraJKT48" className="mr-[20px] text-2xl" target="blank">
                                <i class="fa-brands fa-x-twitter text-[1rem] lg:text-xl"></i>
                            </a>
                            <a href="https://www.tiktok.com/@florajkt48?is_from_webapp=1&sender_device=pc" className="mr-[20px] text-2xl" target="blank">
                                <i class="fa-brands fa-tiktok text-[1rem] lg:text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com/jkt48.flora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="mr-[20px] text-2xl" target="blank">
                                <i class="fa-brands fa-instagram text-[1rem] lg:text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            <LazyLoad height={400} offset={300} once>
                <section className="bg-white flex justify-center">
                    <div className="container flex flex-col p-5 w-full">
                        <h1 className="font-bold text-3xl lg:text-4xl text-center lg:mb-7">Show Recap</h1>
                        <div className="container flex flex-row justify-center p-5">
                            <div className="container w-1/3 text-center text-xl lg:text-2xl">
                                <Number n={221} />
                                <h1>Show</h1>
                            </div>
                            <div className="container w-1/3 text-center text-xl lg:text-2xl">
                                <Number n={1} />
                                <h1>SPV</h1>
                            </div>
                            <div className="container w-1/3 text-center text-xl lg:text-2xl">
                                <Number n={19} />
                                <h1>Unit Song</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </LazyLoad>
            <br id="sosmed"/>
            <br />

            <section className="flex flex-col justify-center p-5 mb-5">
                <h1 className="text-2xl lg:text-4xl font-bold mb-5 text-center">Showroom Flora</h1>
                <div className="container flex flex-col md:flex-row w-full justify-center items-center">
                    <div className="container flex justify-center items-center w-full">
                        <img src={floraImage4} alt="Showroom Flora" className="w-[40vh]"/>
                    </div>
                    <div className="container w-full text-center md:text-start tracking-widest flex flex-col justify-start p-5 ml-4">
                        <h1 className="text-md font-bold mb-3">Flora/フロラ (JKT48)</h1>
                        <h1 className="text-lg mb-3">576131 Followers</h1>
                        <h1 className="text-lg mb-3">Room Level : 213</h1>
                        <h1 className="text-lg mb-3">Show : TBD~</h1>

                            <a href="https://www.showroom-live.com/room/profile?room_id=318224" target="_blank">
                                <button className="border-2 rounded-lg w-full bg-gothic_2 text-gothic_4 hover:bg-gothic_5 hover:text-white">
                                    Selengkapnya...
                                </button>
                            </a>
                    </div>
                </div>
            </section>
            
            <section className="flex flex-col justify-center items-center mb-5">
                <div className="container flex flex-col p-3 items-center">
                    <h1 className="font-bold text-4xl mb-4">Twitter Timeline</h1>
                    <div className="container w-[65vw]">
                        <a className="twitter-timeline" data-lang="id" data-width="100%" data-height="450" data-chrome="noheader nofooter" href="https://twitter.com/S_FloraJKT48?ref_src=twsrc%5Etfw">Tweets by S_FloraJKT48</a>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center p-5 flex-wrap">
                <h1 className="mb-5 text-4xl font-bold">Flo's Instagram</h1>
                <div className="container flex flex-wrap justify-around"> 
                    <InstaFlo/>
                </div>
            </section>

            
            <h1 className="text-4xl font-bold text-center">Flo's Tiktok</h1>
            <blockquote
                className="tiktok-embed max-w-[100vh] min-w-[20vh]"
                cite="https://www.tiktok.com/@florajkt48"
                data-unique-id="florajkt48"
                data-embed-type="creator"
                // style={{ maxWidth: '780px', minWidth: '288px' }}
            >
            <section>
                <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@florajkt48?refer=creator_embed">
                @florajkt48
                </a>
            </section>
            </blockquote>
            <br id="flosCover"/>
            <br />
            <br />

            <section className="flex flex-col justify-center items-center sm:mb-10 w-full">
            <h1 className="text-4xl font-bold text-center sm:mb-5">Flo's Cover</h1>
                <video src={floraVideo} className="w-[70vw] self-center mx-auto" controls></video>
            </section>
        </>
    )
}
