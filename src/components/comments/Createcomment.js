import React, { useEffect, useState } from 'react';

const Createcomment = () => {
  const [ip, setIp] = useState('')
  useEffect(() => {
    const ipAddress = (localStorage.getItem('ip'));
    console.log(ipAddress)
    if(ipAddress){
      setIp(ipAddress)
    }
  }, []);
  return <div>{ip}</div>;
};

export default Createcomment;
