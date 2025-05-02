import React from 'react';
import './App.css';

const CondRender = () => {
  const isLoggedIn = false;
  return (
    <div>
      {isLoggedIn ?
        <div>어서오세요</div> : <div>로그인해요</div>
      }
    </div>
  )
}

export default CondRender