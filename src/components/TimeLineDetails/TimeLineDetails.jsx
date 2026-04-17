import React from 'react';
import callImg from "../../assets/call.png";
import videoImg from "../../assets/video.png";
import textImg from "../../assets/text.png";
const TimeLineDetails = ({timeLine}) => {
    if(timeLine.length===0){
        return <div className='flex bg-base-100 shadow-sm my-5 items-center justify-center min-h-vw p-30'><p className='font-bold text-center text-3xl text-gray-300'> 😢 <br />No activity yet </p></div>

    }
   else{ return (
        <div>
            {[...timeLine].reverse().map((friendData)=>(
                <div className="flex bg-base-100 shadow-sm my-5">
  <div className='flex items-center p-3'>
    <img className='w-[50px] h-[50px] '
      src={friendData.type === "call"? callImg:friendData.type==="videocall"? videoImg: textImg}
       /></div>
  
  <div className="card-body">
    <h2 className="card-title"><span className='font-bold'>{friendData.type==='call'? 'Call':friendData.type==='videocall'? 'Video':'Text'}</span> with {friendData.name}</h2>
    <p>{friendData.time}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
            ))}
            
        </div>
    );}
};

export default TimeLineDetails;