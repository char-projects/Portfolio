import React from 'react';
import styled from 'styled-components';
import { Info } from "lucide-react";

const games = {
    "Board Games": [
        {
            name: "Catan",
            img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
            play: "https://colonist.io/",
            buy: "https://www.amazon.com/CATAN-Board-Game-Discovery-Civilization/dp/B00U26V4VQ/ref=sr_1_2?dib=eyJ2IjoiMSJ9.aDf4BYLqvDvSvqXG8jy4Iev94xK3OUunr17NcfUL7mFbPy0uyX0uyOquucQZJeiVnx7o0an5ylq7WqU8FFqfCDLb0SwKzsyHAOIIMVNBOfPZqProCBXW0s5nd9BOF6yyerKifyFMm7ppuRhZxt7FnCHY7vafX7IEUmn9VRdcZ7bZve50Uco5ouFRfHWP725FXLnvDUDj3bJft0lDvJPa8NE700BzE9rC0vUi8oUrYwg0XnZ3LpFbt-iejk5IQyPHIp_q-SFVVbNF5OIo2OdzM31gYrU2Qb1Wfihk6C2oDiY0JipwXaupNxBmqZZrenRCTw1HkMEuz6sSjxp1SRTyjj564kaUIw-71pNavHzun1D3KjrlhwzVRu0mzhXUhLry_14--ULU-DFMYiqAP8OzcQiBoubax0N1aKZ4KjB0LTe-Af9H5ARd59H2dPcaeZFQ._d3MLtY1cmlycZ7w5OytXUGdmHCb9WRIVybQ_Rgl06U&dib_tag=se&keywords=catan&qid=1741836369&sr=8-2",
        },
        {
            name: "Chess",
            img: "https://static.vecteezy.com/system/resources/thumbnails/046/621/178/small/illustration-depicts-a-chessboard-set-up-for-a-game-with-all-the-black-and-white-chess-pieces-positioned-on-their-squares-vector.jpg",
            play: "https://www.chess.com/",
            buy: "https://www.pianki.com/medieval-style-giant-chess-set-24kt-gold-sterling-silver-onyx-table-chairs_p11371.html",
        },
        {
            name: "Colt Express",
            img: "https://upload.wikimedia.org/wikipedia/en/c/c4/Colt_Express_box_cover.jpg",
            play: "https://colonist.io/",
            buy: "https://www.amazon.com/CATAN-Board-Game-Discovery-Civilization/dp/B00U26V4VQ/ref=sr_1_2?dib=eyJ2IjoiMSJ9.aDf4BYLqvDvSvqXG8jy4Iev94xK3OUunr17NcfUL7mFbPy0uyX0uyOquucQZJeiVnx7o0an5ylq7WqU8FFqfCDLb0SwKzsyHAOIIMVNBOfPZqProCBXW0s5nd9BOF6yyerKifyFMm7ppuRhZxt7FnCHY7vafX7IEUmn9VRdcZ7bZve50Uco5ouFRfHWP725FXLnvDUDj3bJft0lDvJPa8NE700BzE9rC0vUi8oUrYwg0XnZ3LpFbt-iejk5IQyPHIp_q-SFVVbNF5OIo2OdzM31gYrU2Qb1Wfihk6C2oDiY0JipwXaupNxBmqZZrenRCTw1HkMEuz6sSjxp1SRTyjj564kaUIw-71pNavHzun1D3KjrlhwzVRu0mzhXUhLry_14--ULU-DFMYiqAP8OzcQiBoubax0N1aKZ4KjB0LTe-Af9H5ARd59H2dPcaeZFQ._d3MLtY1cmlycZ7w5OytXUGdmHCb9WRIVybQ_Rgl06U&dib_tag=se&keywords=catan&qid=1741836369&sr=8-2",
        },
    ],
    "Card Games": [
        {
            name: "Coup",
            img: "https://www.toyworld.co.nz/cdn/shop/files/Coup-Card-Game-722301926246-COUIBC.jpg?v=1732091242",
            play: "https://colonist.io/",
            buy: "https://www.amazon.com/Coup-Bluffing-Players-Perfect-Friends/dp/B00GDI4HX4?th=1",
        },
        {
            name: "Bang!",
            img: "https://upload.wikimedia.org/wikipedia/en/7/7b/Bang_box_art.jpg",
            play: "https://colonist.io/",
            buy: "https://www.amazon.com/Bang-Wild-West-DaVinci-Games/dp/B001Q4XWB8",
        },
    ],
    "Games I Want to Code": [
        {
            name: "Catan",
            img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
            play: "https://colonist.io/",
            buy: "https://www.amazon.com/CATAN-Board-Game-Discovery-Civilization/dp/B00U26V4VQ/ref=sr_1_2?dib=eyJ2IjoiMSJ9.aDf4BYLqvDvSvqXG8jy4Iev94xK3OUunr17NcfUL7mFbPy0uyX0uyOquucQZJeiVnx7o0an5ylq7WqU8FFqfCDLb0SwKzsyHAOIIMVNBOfPZqProCBXW0s5nd9BOF6yyerKifyFMm7ppuRhZxt7FnCHY7vafX7IEUmn9VRdcZ7bZve50Uco5ouFRfHWP725FXLnvDUDj3bJft0lDvJPa8NE700BzE9rC0vUi8oUrYwg0XnZ3LpFbt-iejk5IQyPHIp_q-SFVVbNF5OIo2OdzM31gYrU2Qb1Wfihk6C2oDiY0JipwXaupNxBmqZZrenRCTw1HkMEuz6sSjxp1SRTyjj564kaUIw-71pNavHzun1D3KjrlhwzVRu0mzhXUhLry_14--ULU-DFMYiqAP8OzcQiBoubax0N1aKZ4KjB0LTe-Af9H5ARd59H2dPcaeZFQ._d3MLtY1cmlycZ7w5OytXUGdmHCb9WRIVybQ_Rgl06U&dib_tag=se&keywords=catan&qid=1741836369&sr=8-2",
        },
        {
            name: "Catan",
            img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg",
            play: "https://colonist.io/",
            buy: "https://www.amazon.com/CATAN-Board-Game-Discovery-Civilization/dp/B00U26V4VQ/ref=sr_1_2?dib=eyJ2IjoiMSJ9.aDf4BYLqvDvSvqXG8jy4Iev94xK3OUunr17NcfUL7mFbPy0uyX0uyOquucQZJeiVnx7o0an5ylq7WqU8FFqfCDLb0SwKzsyHAOIIMVNBOfPZqProCBXW0s5nd9BOF6yyerKifyFMm7ppuRhZxt7FnCHY7vafX7IEUmn9VRdcZ7bZve50Uco5ouFRfHWP725FXLnvDUDj3bJft0lDvJPa8NE700BzE9rC0vUi8oUrYwg0XnZ3LpFbt-iejk5IQyPHIp_q-SFVVbNF5OIo2OdzM31gYrU2Qb1Wfihk6C2oDiY0JipwXaupNxBmqZZrenRCTw1HkMEuz6sSjxp1SRTyjj564kaUIw-71pNavHzun1D3KjrlhwzVRu0mzhXUhLry_14--ULU-DFMYiqAP8OzcQiBoubax0N1aKZ4KjB0LTe-Af9H5ARd59H2dPcaeZFQ._d3MLtY1cmlycZ7w5OytXUGdmHCb9WRIVybQ_Rgl06U&dib_tag=se&keywords=catan&qid=1741836369&sr=8-2",
        },
    ],
};

const BoardGames = () => {
    return (
        <div className="text-black bg-gradient-to-br from-red-400 to-orange-500 min-h-screen py-5 px-3">
            <StyledWrapper>
                <div className="menu">
                    <button className="link">
                        <span className="link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} fill="currentColor" viewBox="0 0 256 256">
                                <rect width={256} height={256} fill="none" />
                                <path d="M213.3815,109.61945,133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.53887A8,8,0,0,0,213.3815,109.61945Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                            </svg>
                        </span>
                        <span className="link-title">Home</span>
                    </button>
                    <button className="link">
                        <span className="link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} fill="currentColor" viewBox="0 0 256 256">
                                <rect width={256} height={256} fill="none" />
                                <polyline points="76.201 132.201 152.201 40.201 216 40 215.799 103.799 123.799 179.799" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                                <line x1={100} y1={156} x2={160} y2={96} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                                <path d="M82.14214,197.45584,52.201,227.397a8,8,0,0,1-11.31371,0L28.603,215.11268a8,8,0,0,1,0-11.31371l29.94113-29.94112a8,8,0,0,0,0-11.31371L37.65685,141.65685a8,8,0,0,1,0-11.3137l12.6863-12.6863a8,8,0,0,1,11.3137,0l76.6863,76.6863a8,8,0,0,1,0,11.3137l-12.6863,12.6863a8,8,0,0,1-11.3137,0L93.45584,197.45584A8,8,0,0,0,82.14214,197.45584Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                            </svg>
                        </span>
                        <span className="link-title">Games</span>
                    </button>
                    <button className="link">
                        <span className="link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} fill="currentColor" viewBox="0 0 256 256">
                                <rect width={256} height={256} fill="none" />
                                <path d="M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                                <line x1={96} y1={112} x2={160} y2={112} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                                <line x1={96} y1={144} x2={160} y2={144} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                            </svg>
                        </span>
                        <span className="link-title">Chat</span>
                    </button>
                    <button className="link">
                        <span className="link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} fill="currentColor" viewBox="0 0 256 256">
                                <rect width={256} height={256} fill="none" />
                                <circle cx={116} cy={116} r={84} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                                <line x1="175.39356" y1="175.40039" x2="223.99414" y2="224.00098" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                            </svg>
                        </span>
                        <span className="link-title">Search</span>
                    </button>
                    <button className="link">
                        <span className="link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} fill="currentColor" viewBox="0 0 256 256">
                                <rect width={256} height={256} fill="none" />
                                <circle cx={128} cy={96} r={64} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={16} />
                                <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
                            </svg>
                        </span>
                        <span className="link-title">Profile</span>
                    </button>
                </div>
            </StyledWrapper>
            <h1 className="text-4xl font-bold text-black my-5">My Favorite Games</h1>
            {Object.entries(games).map(([category, games]) => (
                <div key={category} className="mb-7 text-black">
                    <h2 className="text-2xl shadow-font-semibold mb-2">{category}:</h2>
                    <div className="overflow-x-auto">
                        <div className="flex w-max text-black gap-4">
                            {games.map((game) => (
                                <div key={game.name} className="w-44 bg-white border-4 border-red-900 shadow-3xl overflow-x-auto rounded-xl overflow-hidden transition flex flex-col">
                                    <img src={game.img} alt={game.name} className="w-full border-b-4 border-red-900 h-48 object-cover" />
                                    <div className="p-4 flex flex-col flex-grow">
                                        <p className="flex">
                                            <h3 className="text-xl font-bold mr-2">{game.name}</h3>
                                            <button>< Info /></button>
                                        </p>
                                        <div className="mt-4 justify-center space-x-3 flex">
                                            <a href={game.play} target="_blank" rel="noopener noreferrer" className="w-full px-4 py-1 border-2 border-gray-400 rounded-full text-center bg-gray-300 hover:bg-gray-500 hover:border-gray-400 transition block">
                                                Play
                                            </a>
                                            <a href={game.buy} target="_blank" rel="noopener noreferrer" className="w-full px-4 py-1 border-2 border-gray-400 rounded-full text-center bg-gray-300 hover:bg-gray-500 hover:border-gray-400 transition block">
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

const StyledWrapper = styled.div`
    .menu {
        padding: 0.5rem;
        background-color: #fff;
        position: relative;
        display: flex;
        justify-content: center;
        border-radius: 15px;
        box-shadow: 0 10px 25px 0 rgba(#000, 0.075);
    }

    .link {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 50px;
        border-radius: 8px;
        position: relative;
        z-index: 1;
        overflow: hidden;
        transform-origin: center left;
        transition: width 0.2s ease-in;
        text-decoration: none;
        color: inherit;
        &:before {
            position: absolute;
            z-index: -1;
            content: "";
            display: block;
            border-radius: 8px;
            width: 100%;
            height: 100%;
            top: 0;
            transform: translateX(100%);
            transition: transform 0.2s ease-in;
            transform-origin: center right;
            background-color: #eee;
        }

        &:hover,
        &:focus {
            outline: 0;
            width: 130px;

            &:before,
            .link-title {
                transform: translateX(0);
                opacity: 1;
            }
        }
    }

    .link-icon {
        width: 28px;
        height: 28px;
        display: block;
        flex-shrink: 0;
        left: 18px;
        position: absolute;
        svg {
            width: 28px;
            height: 28px;
        }
    }

    .link-title {
        transform: translateX(100%);
        transition: transform 0.2s ease-in;
        transform-origin: center right;
        display: block;
        text-align: center;
        text-indent: 28px;
        width: 100%;
    }`;

export default BoardGames;
