import React, { useContext } from 'react';
import { FriendContext } from '../../friendContext/FriendContext';
import TimeLineDetails from '../../components/TimeLineDetails/TimeLineDetails';
const Timeline = () => {
    const {timeLine}= useContext(FriendContext);
    console.log(timeLine,"timeLine")
    return (
        <div className='my-5 shadow-sm p-3'>
            <h2 className='font-bold text-2xl my-3 '>Timeline</h2>
            <TimeLineDetails timeLine={timeLine}/>
        </div>
    );
};

export default Timeline;