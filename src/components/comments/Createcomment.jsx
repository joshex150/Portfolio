import React , { useEffect, useState } from 'react'

const Createcomment = () => {
  const [ip, setIP] = useState('')
    useEffect(() => {
        const ipAddress = (localStorage.getItem('ip'));
        console.log(ipAddress)
        if(ipAddress){
          setIP(ipAddress)
        }
      }, []);
  return <div>{ip}</div>
};

export default Createcomment;