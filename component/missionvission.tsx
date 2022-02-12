import React from 'react';
import Image from 'next/image'
import Mv from '../public/images/mv.png'

const missionvission = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between gap-8 ">
        <div className=" w-full lg:w-6/12  box-6 ">
          <Image className="font-logo" src={Mv} alt="Logo" />
        </div>
        <div  className="w-full lg:w-6/12 ">
            <div className="w-9/12 mx-auto">
                {/* <h3 className="text-4xl mb-8">Mission and Vision </h3> */}
                <p className="lg:text-left text-center ">
                Our mission is to offer a high performance exchange at the heart of bincance smart chain. our partners and teams align in our aim to provide high quality service to our community members. <br/><br/>
                </p>
                <p className="lg:text-left text-center ">
                NITROCOIN community is a single large family with an ever evolving series of events. Our network ensures high security to our community members through third party audits.
                </p>
            </div>
        </div>
    </div>
  );
};

export default missionvission;
