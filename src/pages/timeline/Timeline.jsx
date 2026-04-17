import React, { useContext } from 'react';
import { FriendContext } from '../../friendContext/FriendContext';
import TimeLineDetails from '../../components/TimeLineDetails/TimeLineDetails';

import { useState } from 'react';


const Timeline = () => {
    const {timeLine}= useContext(FriendContext);
    const[filter,setFilter]= useState('all');
    const filterTimeLine= filter==="all"?timeLine:timeLine.filter((contactData)=>contactData.type===filter)
    console.log(timeLine,"timeLine")
    return (
        <div className='my-5 shadow-sm p-3'>
            <h2 className='font-bold text-2xl my-3 '>Timeline</h2>
            <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Filter Timeline</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><button onClick={()=>setFilter("all")}>All</button></li>
    <li><button onClick={()=>setFilter("call")}>Call</button></li>
    <li><button onClick={()=>setFilter("video")}>Video</button></li>
    <li><button onClick={()=>setFilter("text")}>Text</button></li>
    
  </ul>
  
</div>
            <TimeLineDetails timeLine={filterTimeLine}/>
        </div>
    );
};

export default Timeline;