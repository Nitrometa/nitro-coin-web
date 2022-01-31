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

    return (
        <>
        <div className="text-center w-full mb-4 my-44">
            <h2 className="lg:text-6xl text-4xl tracking-widest uppercase">Road Map</h2>
        </div>
      
        <div className="grid grid-cols-1 gap-8 mt-10 lg:w-1/2 w-9/12 mx-auto">
            <div className="col-span-1 ">
                <div className="grid grid-cols-6 gap-8 p-12 pt-4 border-after">
                    <div className="col-start-2 col-span-4">                
                        <h3 className="text-2xl my-4">Stage 1</h3>
                    </div>
                    {
                        stage1.map((element,index)=>{
                            if (index % 2 === 0) {
                                return (
                                    <>
                                        <div className="col-start-1 col-end-3 text-left arrow-left">{element}</div>
                                        <div className="col-start-1 col-end-3 text-left "></div>
                                    </>
                                )
                            }else{
                                return (
                                    <>
                                        <div className="col-end-7 col-span-2 "></div>
                                        <div className="col-end-7 col-span-2 text-right arrow-right">{element}</div>
                                    </>
                                )
                            }
                           
                        })
                    }
                  
                </div>
            </div>
            <div className="col-span-1 ">
                <div className="grid grid-cols-6 gap-8 p-12 pt-4 border2-after ">
                    <div className="col-start-2 col-span-4">                
                        <h3 className="text-2xl my-4">Stage 2</h3>
                    </div>
                    {
                        stage2.map((element,index)=>{
                            if (index % 2 === 0) {
                                return (
                                    <>
                                        <div className="col-start-1 col-end-3 text-left arrow-left">{element}</div>
                                        <div className="col-start-1 col-end-3 text-left "></div>
                                    </>
                                )
                            }else{
                                return (
                                    <>
                                        <div className="col-end-7 col-span-2 "></div>
                                        <div className="col-end-7 col-span-2 text-right arrow-right">{element}</div>
                                    </>
                                )
                            }
                           
                        })
                    }
                  
                </div>
            </div>
            <div className=" box-custom  shadow-zinc-800 shadow-lg">
                <div className="grid grid-cols-4 gap-8 p-12 pt-4">
                    <div className="col-start-2 col-span-4">                
                        <h3 className="text-2xl my-4">Stage 3</h3>
                    </div>
                    {
                        stage3.map((element,index)=>{
                            if (index % 2 === 0) {
                                return (
                                    <>
                                        <div className="col-start-1 col-end-3 text-left">{element}</div>
                                    </>
                                )
                            }else{
                                return (
                                    <>
                                        <div className="col-end-7 col-span-2 text-right">{element}</div>
                                    </>
                                )
                            }
                           
                        })
                    }
                  
                </div>
            </div>
            <div className="col-span-1 box-custom shadow-zinc-800 shadow-lg">
                <div className="grid grid-cols-6 gap-8 p-12 pt-4">
                    <div className="col-start-2 col-span-4">                
                        <h3 className="text-2xl my-4">Stage 4</h3>
                    </div>
                    {
                        stage4.map((element,index)=>{
                            if (index % 2 === 0) {
                                return (
                                    <>
                                        <div className="col-start-1 col-end-3 text-left">{element}</div>
                                    </>
                                )
                            }else{
                                return (
                                    <>
                                        <div className="col-end-7 col-span-2 text-right">{element}</div>
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