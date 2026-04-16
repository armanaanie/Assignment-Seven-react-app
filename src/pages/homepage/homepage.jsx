import React from 'react';
import Banner from '../../components/banner/Banner';
import AllFriends from '../../components/AllFriends/AllFriends';
import { Suspense } from 'react';
const friendsPromise= fetch("/allfrienddata.json").then(res=>res.json())
const Homepage = () => {
    
    return (
        <div>
           <Banner/>
          <Suspense fallback={<div className='flex justify-center items-center m-20 gap-2'><span className="loading loading-spinner text-neutral"></span><span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span></div>}><AllFriends friendsPromise={friendsPromise}/></Suspense> 
</div>
        
    );
};

export default Homepage;