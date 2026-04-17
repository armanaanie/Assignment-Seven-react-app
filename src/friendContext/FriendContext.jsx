import React, { createContext, useState } from 'react';
import {  toast } from 'react-toastify';
export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [timeLine, setTimeLine] = useState([]);

  const handleCallBtn = (expectedFriend,type) => {
    

   
    const newData={
        ...expectedFriend,
      type:type,
      time:new Date().toLocaleString(),
      }
    setTimeLine([...timeLine,newData])
    toast(`You ${type}ed ${expectedFriend.name}`)
  };

  const data = {
    timeLine,
    setTimeLine,
    handleCallBtn, 
  };
  
  return (
    <FriendContext.Provider value={data}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;