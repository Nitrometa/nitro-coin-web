import React from 'react';
import Image from 'next/image'
import Nft from '../public/images/NFT-1.png'

const tokenomics = () => {
    // const sevenLayer = [
    // {
    //     icon: ExpiLogo,
    //     name: "Experience",
    //     desc: "Games, Social, Esports, Theater, Shopping"
    // },
    // {
    //     icon: Discovery,
    //     name: "Discovery",
    //     desc: "Ad Networks, Social, Curation, Ratings, Stores, Agents"
    // },
    // {
    //     icon: Creator,
    //     name: "Creator Economy",
    //     desc: "Design Tools, Asset Markets, Workflow, Commerce"
    // },
    // {
    //     icon: Computing,
    //     name: "Spatial Computing",
    //     desc: "3D Engines, VR/AR/XR, Multitasking UI, Geospatial Mapping"
    // },
    // {
    //     icon: Decentralization,
    //     name: "Decentralization",
    //     desc: "Edge Computing, AI agents, Microservice, Blockchain"
    // },
    // {
    //     icon: Human,
    //     name: "Human Interface",
    //     desc: "Mobile, Smartglasses, Wearables, Haptic, Gestures, Voice, Neural"
    // },
    // {
    //     icon: Infra,
    //     name: "Infrastructure",
    //     desc: "5G, WiFi, 6G, Cloud, 7nm to 1.4nm, MEMS, GPUs, Materials"
    // },
    // ]
  return (
      <>
        <div className="flex lg:flex-row flex-col justify-between gap-8 mb-32 ">
            <div className="relative" style={{'width': '120px', 'height': '120px'}} >
                <span className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">15%</span>
                <svg transform="matrix(0 -1 -1 0 0 0)" className="bg-transparent rounded-full" width="120" height="120">
                    <path d="M 112 60 A 52 52 0 0 0 17.931116292502736 29.435166880791392" className="chart-item-0 rounded-full stroke-blue-700 shadow-lg shadow-white"  fill="transparent" stroke-width="16"></path>
                    <path d="M 17.931116292502736 29.435166880791392 A 52 52 0 0 0 43.93111629250272 109.45493884734799" className="chart-item-0 rounded-full stroke-blue-900"  fill="transparent" stroke-width="16"></path>
                    <path d="M 43.93111629250272 109.45493884734799 A 52 52 0 0 0 112 60.000000000000014" className="chart-item-0 rounded-full stroke-blue-900"  fill="transparent" stroke-width="16"></path>
                </svg>
                <h1 className="mt-2">Presell</h1>
            </div>
           <div className="w-9/12  mx-auto"><br />
          
            <div className="ml-24">
            <h3 className="text-4xl mb-8 ">Tokenomics</h3>

                <div className="flex lg:flex-row flex-col justify-between gap-8 ">
                    <div className="w-9/12  mx-auto">
                        <ul className="list-disc text-left mx-auto">
                            <li>Presell</li>
                            <li>Liquidity 20 years</li>
                            <li>Staking pool</li>
                            <li>Marketing and development (Nft metaverse)</li>
                            <li>Strategic partnership</li>
                            <li>Private sale</li>
                            <li>Team tokens</li>
                            <li>Emergency fund</li>
                        </ul><br /><br />
                    </div>
                    <div  className="w-6/12 max-auto mt-15 mr-12">
                        <ul className="list-none leading-6 font-thin text-sm text-left">
                            <li>5% distribution for presell</li>
                            <li>50% for liquidity pool</li>
                            <li>10% for staking pool</li>
                            <li>5% for marketing development</li>
                            <li>10% for strategic partnership</li>
                            <li>5% for private sale</li>
                            <li>5% emergency fund</li>
                            <li>10% allocated in team tokens</li>
                        </ul>
                    </div>
                </div>
            </div>
            
           </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-8 mb-32">
           <div  className="w-full max-auto text-center">
            <h3 className="text-4xl mb-8">Distribution of tokens</h3>
                <p  className=" opacity-70">
                 <strong>NITRO COIN</strong> Is a binance smart chain boasting various impressive features.
                </p>
                <br /> 
                <p className=" opacity-70">
                 This is a unique exchange protocol that gives user complete control over how they manage their finances. Apart from offering spot trading and staking utility owners NITRO COIN’s native token,  can create surveys and vote on changes to implement on the platform. Voting is just as important as adjusting the algorithm and deciding how to generate revenue.
                </p>
           </div>
        </div>
      </>
  );
};

export default tokenomics;
