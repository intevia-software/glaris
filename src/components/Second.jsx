import React from 'react';
import img_1 from '../media/img/man.png'
import img_2 from '../media/img/robinet.png'
import img_3 from '../media/img/courses.png'
import img_4 from '../media/img/cliente.png'

const Second = () => {
    return (
        <div className="w-full px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-36 bg-gray-50 py-20 block lg:flex">
            <div className="w-full lg:w-3/5">
                <div className="w-full block lg:flex items-center justify-between">
                    <div className="w-full bg-gradient-to-r from-gray-500 to-gray-700  mx-0 lg:mx-5 p-5 my-5 lg:my-0">
                        <img src={img_1} alt="" className="shadow-perso w-full" />
                    </div>
                    <div className="w-full bg-gradient-to-r from-gray-700 to-gray-500  mx-0 lg:mx-5 p-5 my-5 lg:my-0">
                        <img src={img_2} alt="" className="shadow-perso w-full" />
                    </div>
                    <div className="w-full bg-gradient-to-r from-gray-500 to-gray-700  mx-0 lg:mx-5 p-5 my-5 lg:my-0">
                        <img src={img_3} alt="" className="shadow-perso w-full" />
                    </div>
                </div>
                <div className="w-full block lg:flex  justify-between items-end py-20">
                    <div className="w-full   mx-0 lg:mx-5">
                        <h3 className="open-bold text-gray-700">Lorem ipsum dolor sit amet consectetur. </h3>
                        <p className="text-gray-700 open-light my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <p className="text-gray-700 open-light mt-5  text-sm">Lorem ipsum dolor.</p>
                        <div className="flex">
                            <span className="mr-5 text-orange-100">1000K</span>
                            <span className="text-orange-100">500K</span>
                        </div>
                        <div className="flex mt-10">
                            <a href="" className="px-5 py-2 bg-gray-700 text-gray-50">Lorem</a>
                            <span className="px-5 py-2 bg-gray-700 mx-5  text-gray-50">Lorem ipsum dolor</span>
                        </div>

                    </div>
                    <div className="w-full my-5 lg:my-0 mx-0 lg:mx-5  ">
                        <img src={img_4} alt="" className="  shadow-perso w-full" />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-2/5">
                <div className="w-full px-0 lg:px-5">
                    <h2 className="text-2xl font-bold"> Lorem ipseum</h2>
                    <h3 className="py-3 text-lg font font-bold"> Somme text for fun in style of sky</h3>
                    <p className="py-1 text-sm lg:text-base open-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quaerat deserunt neque assumenda animi atque, necessitatibus repudiandae ipsa eum et labore accusantium minus dolorum ut sit magni accusamus. Alias, pariatur.</p>
                    
                </div>
            </div>

        </div>
    );
};

export default Second;