import React from 'react';

const FriendCard = ({friend}) => {
    return (
        <div className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10 ">
    <img
      src={friend.picture}
      alt={friend.name}
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p>{friend.days_since_contact} days ago</p>
    <div className="flex flex-col justify-center items-center gap-2">
     <div> {
        friend.tags.map((tag)=><a className='badge badge-accent badge-soft ml-1'>{tag}</a>)}</div>
      <a className={friend.status==="overdue"?"badge badge-error text-white":friend.status==="almost due"?"badge badge-warning text-white":"badge badge-success text-white"}>{friend.status}</a>
    </div>
  </div>
</div>
    );
};

export default FriendCard;