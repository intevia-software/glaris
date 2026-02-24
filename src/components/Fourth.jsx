import React from 'react';
import panorama from '../media/img/panorama.jpg'

const Fourth = () => {
    return (
        <div className="w-full px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-36 bg-gray-100 py-20 block lg:flex items-end">
            <div className="w-full lg:w-3/5 px-0 lg:px-5 mb-10 lg:mb-0">
                <img src={panorama} alt="" className="w-full shadow" />
                <div className="w-full lg:w-1/3 2xl:w-1/4 mb-0 block  lg:mb-16 bg-gray-600   text-left   lg:absolute lg:-translate-y-[150px]  p-5 shadow-perso">
                    <span className="open-light text-gray-100 text-left text">lorem ipseum lerem of site</span>
                </div>
            </div>
            <div className="w-full lg:w-2/5">
                <div className="w-full px-0 lg:px-5">
                    <h2 className="text-2xl font-bold"> Lorem ipseum</h2>
                    <h3 className="py-3 text-lg font font-bold"> Somme text for fun in style of sky</h3>
                    <p className="py-3 open-light text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quaerat deserunt neque assumenda animi atque, necessitatibus repudiandae ipsa eum et labore accusantium minus dolorum ut sit magni accusamus. Alias, pariatur.</p>
                    <p className="py-3 open-light text-base block lg:hidden 2xl:block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quaerat deserunt neque assumenda animi atque, necessitatibus repudiandae ipsa eum et labore accusantium minus dolorum ut sit magni accusamus. Alias, pariatur.</p>
                </div>
            </div>

        </div>
    );
};

export default Fourth;