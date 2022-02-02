import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
 
    return (
        <>
            <footer >

<<<<<<< HEAD
=======
                <div className="text-center lg:w-1/2 w-9/12 mx-auto mt-4 opacity-80 text-lg">
                    Mission and Visionour mission is to offer a high performance exchange at the heart of bincance smart chain. our partners and teams align in our aim to provide high quality service to our community members. NITROCOIN community is a single large family with an ever evolving series of events. Our network ensures high security to our community members through third party audits.
                </div>
>>>>>>> 2290620f02ac15850aedc1441fbde2c21da76f84
             
                <div className="text-center my-10">
                    <hr className="mx-20 mb-10"/>
                    <div className="rounded-social-buttons gap-4 flex flex-row justify-center mb-10">
                        <SocialIcon className="saturate-200" url="https://facebook.com" />
                        <SocialIcon className="saturate-200" url="https://twitter.com" />
                        <SocialIcon className="saturate-200" url="https://instagram.com" />
                        <SocialIcon className="saturate-200" url="https://google.com" />
                        <SocialIcon className="saturate-200" url="https://telegram.com" />
                    </div>
                   <div className="text-base">
                        Copyright © 2022 Nitro Coin <br/> All rights reserved  |  Privacy
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;