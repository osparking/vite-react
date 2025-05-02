import React from 'react'
import './App.css';

const CondRender = () => {
  const isLoggedIn = true;
  
  if (isLoggedIn) {
    return (
      <div>어서오세요</div>
    )
  } else {

    return (
      <div>로그인해요</div>
    )
  }
}

export default CondRender