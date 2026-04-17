import React, { createContext, useState } from 'react';

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
    alert(`you called ${expectedFriend.name}`)
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