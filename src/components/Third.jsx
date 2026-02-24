import React from 'react';
import salon from '../media/img/salon.jpg'
import cheer from '../media/img/cheer.jpg'
import canape from '../media/img/canape.jpg'
import black from '../media/img/black.jpg'

const Third = () => {
    return (
        <div className="w-full block lg:flex bg-gray-500 ">
            <div className="w-full lg:w-3/5  bg-gray-600 lg:pl-5 xl:pl-5 2xl:pl-36">
                <div className="w-full pt-5 px-5">
                    <h3 className="text-gray-100 open-light">Lorem ipseum</h3>
                </div>
                <div className="w-full block lg:flex  px-5 lg:pl-5 gap-x-3 lg:pr-20 py-5 lg:py-5">
                   
                    <img src={salon} alt="" className="w-full my-5 shadow-perso lg:my-0 lg:w-1/3" />
                    <img src={cheer} alt="" className="w-full my-5 shadow-perso lg:my-0 lg:w-1/3" />
                    <img src={canape} alt="" className="w-full my-5 shadow-perso lg:my-0 lg:w-1/3" />
                    
                
                </div>
                <div className="w-full text-right py-3 pr-16">
                    <span className="text-gray-200 text-xs text-gray-100">lorem ipseum left of this thing in dall</span>
                </div>
            </div>

            <div className="w-full lg:w-2/5  block lg:flex px-5  xl:px-10 2xl:px-36  py-10 lg:py-0 justify-end">
            
                <div className="w-full xl:w-1/3 2xl:w-1/4 mb-0 block  lg:justify-between items-center lg:mb-16 bg-gray-700   text-center   lg:absolute lg:-translate-y-[400px] shadow-perso">
                    <div className="w-full bg-orange-100 p-5">
                        <h2 className="text-left"> Humble text in the sea</h2>
                    </div>

                    <div className="w-full">
                        <img src={black} alt="" className="w-full" />
                    </div>

                </div>

                <div className="w-full xl:w-1/3 2xl:w-1/4 mb-0 block  lg:mb-16 bg-gray-600   text-left   lg:absolute lg:translate-y-[150px]  p-5">
                    <span className="open-light text-gray-100 text-left text">lorem ipseum lerem of site</span>
                </div>
            </div>

        </div>
    );
};

export default Third;