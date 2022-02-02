import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
 
    return (
        <>
            <footer >

             
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