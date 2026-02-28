import React from 'react';
import vase from '../media/img/vase.png'
import diy from '../media/img/diy.png'
import courses from '../media/img/courses.png'

const Fourth = () => {
    return (
        <div className="w-full block lg:flex bg-gray-700 my-20">
            <div className="w-full lg:w-3/5 lg:flex bg-gray-100 lg:pl-5 xl:pl-5 2xl:pl-36">
                <div className="w-full lg:w-1/2 block lg:flex  px-5 lg:pl-5 gap-x-3 lg:pr-20 py-5 lg:py-16 ">
                    <img src={vase} alt="" className="w-full   lg:my-0 shadow-perso " />
                </div>
                <div className="w-full lg:w-1/2 block   px-5 lg:pl-5 gap-x-3  py-5 lg:py-16 bg-gray-600">
                    <h2 className="text-orange-100 font-bold">Lorem ipseume dolor site in one </h2>
                    <p className="open-light text-gray-100 my-5 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatum, omnis qui repellendus maxime sit. Sunt aliquid vero, unde repudiandae nemo iste magnam atque explicabo repellat, a, laboriosam molestias itaque.</p>
                    <img src={diy} alt="" className="w-full" />
                </div>
            </div>

            <div className="w-full lg:w-2/5  block lg:flex px-5  xl:px-10 2xl:px-36   justify-center items-center">
            
             

                <div className="w-full   mb-0 block  lg:mb-16 bg-gray-600   text-left     p-5">

                    <img src={courses} alt="" className="mb-5" />
                    <span className="open-light text-gray-100 text-left ">lorem ipseum lerem of site</span>
                </div>
            </div>

        </div>
    );
};

export default Fourth;