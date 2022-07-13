import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Createcomment from './Createcomment';

function Trace() {
  //creating IP state
  const [ip] = useState('');
  const [loading, setLoading] = useState(false);
  //creating function to load ip address from the API

  useEffect(() => {
    //passing getData method to the lifecycle method
    setLoading(true);
    const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/');
      if (res.data) {
        localStorage.setItem('ip', res.data.IPv4);
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {/* {loading ? (
        <h1 style={{ marginTop: '20px', textAlign: 'center' }}>Loading...</h1>
      ) : (
        <Createcomment />
      )} */}
    </div>
  );
}

export default Trace;
