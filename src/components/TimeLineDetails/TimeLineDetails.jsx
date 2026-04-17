import React from 'react';
import callImg from "../../assets/call.png";
import videoImg from "../../assets/video.png";
import textImg from "../../assets/text.png";
const TimeLineDetails = ({timeLine}) => {
    return (
        <div>
            {[...timeLine].reverse().map((friendData)=>(
                <div className="flex bg-base-100 shadow-sm my-5">
  <div className='flex items-center p-3'>
    <img className='w-[50px] h-[50px] '
      src={friendData.type === "call"? callImg:friendData.type==="video"? videoImg: textImg}
       /></div>
  
  <div className="card-body">
    <h2 className="card-title"><span className='font-bold'>{friendData.type==='call'? 'Call':friendData.type==='video'? 'Video':'Text'}</span> with {friendData.name}</h2>
    <p>{friendData.time}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
            ))}
            
        </div>
    );
};

export default TimeLineDetails;