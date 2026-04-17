import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { PiBellRingingFill } from "react-icons/pi";
import { FaBoxArchive } from "react-icons/fa6";
import { IoTrashBinOutline } from "react-icons/io5";
import call from "../../../src/assets/call.png";
import text from "../../../src/assets/text.png";
import video from "../../../src/assets/video.png";
import { Link } from 'react-router-dom';
import { FriendContext } from '../../friendContext/FriendContext';
const FriendDetailsPage = () => {
  const { id } = useParams();
  
  const friendDetails = useLoaderData();
  const expectedFriend = friendDetails.find((friend) => friend.id === Number(id)

  );

  const {
    name, bio, days_since_contact, email, goal, next_due_date, picture, status, tags
  } = expectedFriend;
  const {handleCallBtn,timeLine}=useContext(FriendContext);
 console.log(timeLine,"timeline")

  
  return (
    <div className=' flex flex-col lg:flex-row gap-4 my-10 place-items-center'>
      <div className='flex flex-col gap-2'>
        <div className="card bg-base-100  shadow-sm">
          <figure className="px-10 pt-10 ">
            <img
              src={picture}
              alt={name}
              className="rounded-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>

            <div className="flex flex-col justify-center items-center gap-2">

              <a className={status === "overdue" ? "badge badge-error text-white" : status === "almost due" ? "badge badge-warning text-white" : "badge badge-success text-white"}>{status}</a>
              <div> {
                tags.map((tag, index) => <a className='badge badge-accent badge-soft ml-1' key={index}>{tag}</a>)}</div>
            </div>
            <p className='italic'>"{bio}"</p>
            <p>Preferred:{email}</p>
          </div>

          <button className='btn btn-ghost mb-2 bg-base-200'><PiBellRingingFill /> Snooze 2 weeks</button><button className='btn btn-ghost mb-2 bg-base-200'><FaBoxArchive /> Archive</button><button className='btn btn-ghost mb-2 bg-base-200 text-red-500'><IoTrashBinOutline />Delete</button>
        </div>
      </div>
      <div className='flex flex-col gap-2 w-[70%] '><div  className='grid grid-cols-1  lg:grid-cols-3  mt-7 gap-3 place-items-center'>
        <div className=" bg-base-100  shadow-sm w-40">
                           <div className="flex flex-col justify-center items-center gap-3 p-3">
                            <h2 className="text-2xl font-bold">{days_since_contact}</h2>
                            <p>Days since contact</p>

                          </div>
                        
                    </div>
                     <div className=" bg-base-100  shadow-sm w-40">
                           <div className="flex flex-col justify-center items-center gap-3 p-3">
                            <h2 className="text-2xl font-bold">{goal}</h2>
                            <p>Goal (days)</p>

                          </div>
                        
                    </div>
                     <div className=" bg-base-100  shadow-sm w-40">
                           <div className=" flex flex-col justify-center items-center gap-3 p-3">
                            <h2 className="text-2xl font-bold">{next_due_date}</h2>
                            <p>Next due</p>

                          </div>
                        
                    </div>
                    
                    
                    
                    
                    </div>
                    <div className='bg-base-100  shadow-sm p-3 my-3'><div className='flex bg-base-100  justify-between items-center'><p className='font-semibold'>Relationship Goal</p><button className='btn'>Edit</button></div><p>Connect every {goal} days</p></div> 
                    
                    <div className='bg-base-100  shadow-sm p-3 my-3'><p className='font-semibold'>Quick check in</p><div  className='grid grid-cols-1  lg:grid-cols-3 gap-3 mt-7 place-items-center'>
        <button className="btn h-35 bg-base-100  shadow-sm w-35" onClick={()=>handleCallBtn(expectedFriend,"call")}>
                           <div className="flex flex-col justify-center items-center gap-3 p-3" >
                            <img src={call} alt="" />
                            <button className='font-semibold text-2xl'>Call</button>

                          </div>
                        
                    </button>
                      <button className="btn h-35 bg-base-100  shadow-sm w-35" onClick={()=>handleCallBtn(expectedFriend,"text")}>
                           <div className="flex flex-col justify-center items-center gap-3 p-3" >
                            <img src={text} alt="" />
                            <button className='font-semibold text-2xl'>Text</button>

                          </div>
                        
                    </button>
                     <button className="btn h-35 bg-base-100  shadow-sm w-35" onClick={()=>handleCallBtn(expectedFriend,"videocall")}>
                           <div className="flex flex-col justify-center items-center gap-3 p-3" >
                            <img src={video} alt="" />
                            <button className='font-semibold text-2xl'>Video</button>

                          </div>
                        
                    </button>
                    
                    </div></div>
                    
                    </div>
    </div>
  );
};

export default FriendDetailsPage;