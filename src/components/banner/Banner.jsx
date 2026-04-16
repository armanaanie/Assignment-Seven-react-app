import React from 'react';
import { IoAdd } from "react-icons/io5";
const Banner = () => {
    return (
        <div className=" bg-base-100 mt-10 ">
            <div className=" text-center">
                <div className="">
                    <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
                    <p className="py-6">
                        Your personal shelf of meaningful connections.  Browse, tend, and nurture the <br />
                        relationships that matter most.
                    </p>
                    <button className="btn bg-green-500 text-white"> <IoAdd />Add Friend</button>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-7 place-items-center'>
                        <div className=" bg-base-100 w-60 shadow-sm">
                           <div className="flex flex-col justify-center items-center gap-3 p-3">
                            <h2 className="text-3xl font-bold">10</h2>
                            <p>Total Friends</p>

                          </div>
                        
                    </div>
                    
                     <div className="bg-base-100 w-60 shadow-sm">
                           <div className="flex flex-col justify-center items-center gap-3 p-3">
                            <h2 className="text-3xl font-bold">3</h2>
                            <p>On Track</p>

                          </div>
                        
                    </div> <div className="bg-base-100 w-60 shadow-sm">
                           <div className="flex flex-col justify-center items-center gap-3 p-3">
                            <h2 className="text-3xl font-bold">6</h2>
                            <p>Need Attention</p>

                          </div>
                        
                    </div>
                     <div className=" bg-base-100 w-60 shadow-sm">
                           <div className="flex flex-col justify-center items-center gap-3 p-3">
                            <h2 className="text-3xl font-bold">12</h2>
                            <p>Interactions this month</p>

                          </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;