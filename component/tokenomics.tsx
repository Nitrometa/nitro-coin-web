import React from 'react';
import Image from 'next/image'
import Nft from '../public/images/NFT-1.png'
    {/* <div className="w-9/12  mx-auto">
                        <ul className="list-disc text-left mx-auto">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
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
                    </div> */}
const tokenomics = () => {
    const tokenomics = [
    {
        name: "Experience",
        class: "chart-item-0 rounded-full shadow-lg shadow-white stroke-blue-500",
        value: "5%"
    },
    {
        name: "Liquidity 20 years",
        class: "chart-item-0 rounded-full shadow-lg shadow-white stroke-indigo-600",
        value: "5%"
    },
    {
        name: "Staking pool",
        class: "chart-item-0 rounded-full shadow-lg shadow-white stroke-orange-700",
        value: "5%"
    },
    {
        name: "Marketing and development (Nft metaverse)",
        class: "chart-item-0 rounded-full shadow-lg shadow-white stroke-yellow-800",
        value: "5%"
    },
    {
        name: "Strategic partnership",
        class: "chart-item-0 rounded-full shadow-lg shadow-white stroke-pink-900",
        value: "5%"
    },
    {
        name: "Private sale",
        class: "chart-item-0 rounded-full shadow-lg shadow-white stroke-sky-400",
        value: "5%"
    },
    {
        name: "Team tokens",
        class: "chart-item-0 rounded-full shadow-lg shadow-white stroke-rose-500",
        value: "5%"
    },
    {
        name: "Emergency fund",
        class: "chart-item-0 rounded-full shadow-lg shadow-white stroke-green-500",
        value: "5%"
    },
    ]
  return (
      <>
        <div className="flex lg:flex-row flex-col justify-between gap-8 mb-32">
           <div className="w-9/12  mx-auto"><br />
            <div className="justify-center">
            <div className="text-center w-full mb-4 ">
            <h3 className="text-4xl mb-8  text-center">Tokenomics</h3>
            </div>
                <div className="flex  lg:flex-row flex-col justify-between gap-8 ">
                {
                        tokenomics.map((element,key) => {
                        return (
                        <div className="relative" style={{'width': '120px', 'height': '120px'}} >
                            <span className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">{element.value}</span>
                            <svg transform="matrix(0 -1 -1 0 0 0)" className="bg-transparent rounded-full" width="120" height="120">
                                <path d="M 112 60 A 52 52 0 0 0 17.931116292502736 29.435166880791392" className={element.class}  fill="transparent" stroke-width="16"></path>
                                <path d="M 17.931116292502736 29.435166880791392 A 52 52 0 0 0 43.93111629250272 109.45493884734799" className="chart-item-0 rounded-full stroke-blue-900"  fill="transparent" stroke-width="16"></path>
                                <path d="M 43.93111629250272 109.45493884734799 A 52 52 0 0 0 112 60.000000000000014" className="chart-item-0 rounded-full stroke-blue-900"  fill="transparent" stroke-width="16"></path>
                            </svg>
                            <h1 className="mt-2">{ element.name }</h1>
                        </div>
                      )
                    })
                }
                
                
                </div>
                
            </div>
            
           </div>
        </div>
            <div className="flex lg:flex-row flex-col justify-center gap-8 mb-32">
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
        </div>
      </>
  );
};

export default tokenomics;
