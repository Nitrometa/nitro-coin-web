import React from 'react';
import Image from 'next/image'
import Nft from '../public/images/NFT-1.png'

const nft = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between gap-8 mb-32">
        <div className="lg:w-6/12 w-9/12  text-left">
            <div className="w-9/12 mx-auto">
            <h3 className="text-4xl mb-8">NFTs</h3>
            <p>
                NFT stands for <strong>non-fungible token </strong>, which basically means that it's a one-of-a-kind digital asset that belongs to you and you only. The most popular NFTs right now include artwork and music, but can also include videos and even tweets.
            </p>
            </div>
        </div>
        <div  className="w-6/12 box-6">
             <Image className="font-logo" src={Nft} alt="Logo" />
        </div>
    </div>
  );
};

export default nft;
