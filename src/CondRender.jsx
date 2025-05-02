import React from 'react';
import './App.css';

const CondRender = () => {
  const isLoggedIn = false;
return (
  <div>
    {isLoggedIn ?
      "어서오세요." : "로그인해요."
    }
  </div>
)
}

export default CondRender