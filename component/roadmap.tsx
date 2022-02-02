import React, { useCallback, useEffect, useState } from 'react';

const RoadMap = () =>{
    const stage1 = [
        'Team Alignement',
        'Research and Development',
        'Graphic Design',
        'Social Media and Website Creation',
        'Nitro Coin Development',
        'Media Launch',
        'Token Creation',
        'Private Sale',
        'Audit',
        'Influencer Marketing',
        'Presale of Nitro Coin',
        'First Game Alpha Test',
        'Launch of Nitro Coin Founder NFT',
        'Nitro Coin Beta Test',
        'Public Sale at Dex',
        'Nitro Coin Episode 1 Launch'
    ]

    const stage2 = [
        'Coin Listing',
        'RND NFT Gallery',
        'Nitro Coin Episode 2 Launch',
        'RND Second Game',
        'Mainstream Media Marketing',
        'Nitro Coin Episode 3 Launch',
        'RND Game Studio'
    ]

    const stage3 = [
        'Cex Listing',
        'Launch NFT Gallery',
        'Nitro Coin Episode 4 Launch',
        'Partnerships',
        'RND Nitro Coin Media',
        'Nitro Coin Episode 5 Launch'
    ]

    const stage4 = [
        'Launch 2nd Game',
        'NFT Gallery 2022 Series',
        'Alpha Test Nitro Legends Season 2 (Mobile App)',
        'Nitro Coin Charcter Expansion',
        'More Cex Listings',
        'Launch 2nd Game Founder NFT',
        'Beta Test Nitro Coin Mobile App',
        'Launch Nitro Coin Media'
    ]

    const [isShowStage1, setShowStage1] = useState(false);
    const [isShowStage2, setShowStage2] = useState(false);
    const [isShowStage3, setShowStage3] = useState(false);
    const [isShowStage4, setShowStage4] = useState(false);

    return (
        <>
        <div className="text-center w-full mb-4 ">
            <h2 className="lg:text-5xl text-4xl  uppercase ">Road Map</h2>
        </div>
      
        <div className="grid grid-cols-1 gap-8 mt-10 lg:w-1/2 w-10/12 mx-auto cabinet">
            
            <div className="col-span-1 bg-blue-700 shadow-lg shadow-blue-900 rounded z-10">
                <div className="flex flex-row justify-between  px-4 items-center">
                    <h3 className="text-2xl my-4">Stage 1</h3>  
                    <button className={ !isShowStage1 ? "inline-block w-10 h-10 text-black p-1 transition-all" : "inline-block w-10 h-10 text-black p-1 origin-center rotate-45 transition-all" }  onClick={() => setShowStage1((prev) => !prev) }>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 128 128"
                            style={{"fill":"#FFF"}}>    
                            <path d="M 64 6.0507812 C 49.15 6.0507812 34.3 11.7 23 23 C 0.4 45.6 0.4 82.4 23 105 C 34.3 116.3 49.2 122 64 122 C 78.8 122 93.7 116.3 105 105 C 127.6 82.4 127.6 45.6 105 23 C 93.7 11.7 78.85 6.0507812 64 6.0507812 z M 64 12 C 77.3 12 90.600781 17.099219 100.80078 27.199219 C 121.00078 47.499219 121.00078 80.500781 100.80078 100.80078 C 80.500781 121.10078 47.500781 121.10078 27.300781 100.80078 C 7.0007813 80.500781 6.9992188 47.499219 27.199219 27.199219 C 37.399219 17.099219 50.7 12 64 12 z M 64 42 C 62.3 42 61 43.3 61 45 L 61 61 L 45 61 C 43.3 61 42 62.3 42 64 C 42 65.7 43.3 67 45 67 L 61 67 L 61 83 C 61 84.7 62.3 86 64 86 C 65.7 86 67 84.7 67 83 L 67 67 L 83 67 C 84.7 67 86 65.7 86 64 C 86 62.3 84.7 61 83 61 L 67 61 L 67 45 C 67 43.3 65.7 42 64 42 z"></path>
                        </svg>
                    </button>
                </div> 
                <div className={ isShowStage1 ? "grid lg:grid-cols-6   gap-8 lg:p-12 p-4 pt-4 border-after transition-all border-t border-white" : "accordions transition-all" } >
                    {
                        stage1.map((element,index)=>{
                            if (index % 2 === 0) {
                                return (
                                    <>
                                        <div className="col-start-1 col-end-3 text-left arrow-left" key={index}>{element}</div>
                                        <div className="col-start-1 col-end-3 text-left " key={index+2}></div>
                                    </>
                                )
                            }else{
                                return (
                                    <>
                                        <div className="lg:col-end-7 col-end-6 col-span-2 " key={index+1}></div>
                                        <div className="lg:col-end-7 col-end-6 col-span-2 text-right arrow-right " key={index}>{element}</div>
                                    </>
                                )
                            }
                           
                        })
                    }
                </div>
            </div>
            <div className="col-span-1 bg-green-700 shadow-lg shadow-green-900 rounded z-10">
                <div className="flex flex-row justify-between  px-4 items-center">
                    <h3 className="text-2xl my-4">Stage 2</h3>  
                    <button className={ !isShowStage2 ? "inline-block w-10 h-10 text-black p-1 transition-all" : "inline-block w-10 h-10 text-black p-1 origin-center rotate-45 transition-all" } onClick={() => setShowStage2((prev) => !prev) }>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 128 128"
                            style={{"fill":"#FFF"}}>    
                            <path d="M 64 6.0507812 C 49.15 6.0507812 34.3 11.7 23 23 C 0.4 45.6 0.4 82.4 23 105 C 34.3 116.3 49.2 122 64 122 C 78.8 122 93.7 116.3 105 105 C 127.6 82.4 127.6 45.6 105 23 C 93.7 11.7 78.85 6.0507812 64 6.0507812 z M 64 12 C 77.3 12 90.600781 17.099219 100.80078 27.199219 C 121.00078 47.499219 121.00078 80.500781 100.80078 100.80078 C 80.500781 121.10078 47.500781 121.10078 27.300781 100.80078 C 7.0007813 80.500781 6.9992188 47.499219 27.199219 27.199219 C 37.399219 17.099219 50.7 12 64 12 z M 64 42 C 62.3 42 61 43.3 61 45 L 61 61 L 45 61 C 43.3 61 42 62.3 42 64 C 42 65.7 43.3 67 45 67 L 61 67 L 61 83 C 61 84.7 62.3 86 64 86 C 65.7 86 67 84.7 67 83 L 67 67 L 83 67 C 84.7 67 86 65.7 86 64 C 86 62.3 84.7 61 83 61 L 67 61 L 67 45 C 67 43.3 65.7 42 64 42 z"></path>
                        </svg>
                    </button>
                </div> 
                <div className={ isShowStage2 ? "grid lg:grid-cols-6  gap-8 lg:p-12 p-4 pt-4 border-after transition-all border-t border-white" : "accordions transition-all" } >
                    {
                        stage2.map((element,index)=>{
                            if (index % 2 === 0) {
                                return (
                                    <>
                                        <div className="col-start-1 col-end-3 text-left arrow-left-2" key={index}>{element}</div>
                                        <div className="col-start-1 col-end-3 text-left" key={index+2}></div>
                                    </>
                                )
                            }else{
                                return (
                                    <>
                                        <div className="col-end-7 col-span-2 " key={index+1}></div>
                                        <div className="col-end-7 col-span-2 text-right arrow-right-2" key={index}>{element}</div>
                                    </>
                                )
                            }
                           
                        })
                    }
                  
                </div>
            </div>
            <div className="col-span-1 bg-yellow-700 shadow-lg shadow-yellow-900 rounded z-10">
                <div className="flex flex-row justify-between px-4 items-center">
                    <h3 className="text-2xl my-4">Stage 3</h3>  
                    <button className={ !isShowStage3 ? "inline-block w-10 h-10 text-black p-1 transition-all" : "inline-block w-10 h-10 text-black p-1 origin-center rotate-45 transition-all" } onClick={() => setShowStage3((prev) => !prev) }>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 128 128"
                            style={{"fill":"#FFF"}}>    
                            <path d="M 64 6.0507812 C 49.15 6.0507812 34.3 11.7 23 23 C 0.4 45.6 0.4 82.4 23 105 C 34.3 116.3 49.2 122 64 122 C 78.8 122 93.7 116.3 105 105 C 127.6 82.4 127.6 45.6 105 23 C 93.7 11.7 78.85 6.0507812 64 6.0507812 z M 64 12 C 77.3 12 90.600781 17.099219 100.80078 27.199219 C 121.00078 47.499219 121.00078 80.500781 100.80078 100.80078 C 80.500781 121.10078 47.500781 121.10078 27.300781 100.80078 C 7.0007813 80.500781 6.9992188 47.499219 27.199219 27.199219 C 37.399219 17.099219 50.7 12 64 12 z M 64 42 C 62.3 42 61 43.3 61 45 L 61 61 L 45 61 C 43.3 61 42 62.3 42 64 C 42 65.7 43.3 67 45 67 L 61 67 L 61 83 C 61 84.7 62.3 86 64 86 C 65.7 86 67 84.7 67 83 L 67 67 L 83 67 C 84.7 67 86 65.7 86 64 C 86 62.3 84.7 61 83 61 L 67 61 L 67 45 C 67 43.3 65.7 42 64 42 z"></path>
                        </svg>
                    </button>
                </div> 
                <div className={ isShowStage3 ? "grid lg:grid-cols-6 gap-8 lg:p-12 p-4 pt-4 border-after transition-all border-t border-white" : "accordions transition-all" } >
                    {
                        stage3.map((element,index)=>{
                            if (index % 2 === 0) {
                                return (
                                    <>
                                        <div className="col-start-1 col-end-3 text-left arrow-left-3" key={index}>{element}</div>
                                        <div className="col-start-1 col-end-3 text-left " key={index +2}></div>
                                    </>
                                )
                            }else{
                                return (
                                    <>
                                        <div className="col-end-7 col-span-2 " key={index+1}></div>
                                        <div className="col-end-7 col-span-2 text-right arrow-right-3" key={index}>{element}</div>
                                    </>
                                )
                            }
                           
                        })
                    }
                  
                </div>
            </div>
            <div className="col-span-1 bg-fuchsia-700 shadow-lg shadow-fuchsia-900 rounded z-10">
                <div className="flex flex-row justify-between  px-4 items-center">
                    <h3 className="text-2xl my-4">Stage 4</h3>  
                    <button className={ !isShowStage4 ? "inline-block w-10 h-10 text-black p-1 transition-all" : "inline-block w-10 h-10 text-black p-1 origin-center rotate-45 transition-all" } onClick={() => setShowStage4((prev) => !prev) }>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 128 128"
                            style={{"fill":"#FFF"}}>    
                            <path d="M 64 6.0507812 C 49.15 6.0507812 34.3 11.7 23 23 C 0.4 45.6 0.4 82.4 23 105 C 34.3 116.3 49.2 122 64 122 C 78.8 122 93.7 116.3 105 105 C 127.6 82.4 127.6 45.6 105 23 C 93.7 11.7 78.85 6.0507812 64 6.0507812 z M 64 12 C 77.3 12 90.600781 17.099219 100.80078 27.199219 C 121.00078 47.499219 121.00078 80.500781 100.80078 100.80078 C 80.500781 121.10078 47.500781 121.10078 27.300781 100.80078 C 7.0007813 80.500781 6.9992188 47.499219 27.199219 27.199219 C 37.399219 17.099219 50.7 12 64 12 z M 64 42 C 62.3 42 61 43.3 61 45 L 61 61 L 45 61 C 43.3 61 42 62.3 42 64 C 42 65.7 43.3 67 45 67 L 61 67 L 61 83 C 61 84.7 62.3 86 64 86 C 65.7 86 67 84.7 67 83 L 67 67 L 83 67 C 84.7 67 86 65.7 86 64 C 86 62.3 84.7 61 83 61 L 67 61 L 67 45 C 67 43.3 65.7 42 64 42 z"></path>
                        </svg>
                    </button>
                </div> 
                <div className={ isShowStage4 ? "grid lg:grid-cols-6 gap-8 lg:p-12 p-4 pt-4 border-after  transition-all border-t border-white" : "accordions transition-all" } >                 {
                        stage4.map((element,index)=>{
                            if (index % 2 === 0) {
                                return (
                                    <>
                                        <div className="col-start-1 col-end-3 text-left arrow-left-4" key={index}>{element}</div>
                                        <div className="col-start-1 col-end-3 text-left" key={index +2}></div>
                                    </>
                                )
                            }else{
                                return (
                                    <>
                                        <div className="col-end-7 col-span-2 " key={index +1}></div>
                                        <div className="col-end-7 col-span-2 text-right arrow-right-4" key={index}>{element}</div>
                                    </>
                                )
                            }
                           
                        })
                    }
                  
                </div>
            </div>
          
        </div>
        </>
    )
}

export default RoadMap;