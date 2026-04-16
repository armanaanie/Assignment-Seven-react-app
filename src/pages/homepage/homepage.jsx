import React from 'react';
import Banner from '../../components/banner/Banner';
import AllFriends from '../../components/AllFriends/AllFriends';
import { Suspense } from 'react';
const friendsPromise= fetch("/allfrienddata.json").then(res=>res.json())
const Homepage = () => {
    
    return (
        <div>
           <Banner/>
          <Suspense fallback={<div>Loading....</div>}><AllFriends friendsPromise={friendsPromise}/></Suspense> 
</div>
        
    );
};

export default Homepage;