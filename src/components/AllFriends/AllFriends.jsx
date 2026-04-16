import  { use } from 'react';
import FriendCard from '../friendCard/friendCard';

const AllFriends = ({friendsPromise}) => {
    const friend= use(friendsPromise);
    console.log(friend,"friend")
    return (
        <div className='mt-10'>
            <h2 className='font-bold text-2xl '>Your Friends {friend.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'> 
                {
             friend.map((friend,id)=><FriendCard friend={friend} key={id}></FriendCard>)       
                }
                </div>
        </div>
    );
};

export default AllFriends;