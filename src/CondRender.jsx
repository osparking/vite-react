import React from 'react';
import './App.css';

const CondRender = () => {
  const alertErrorMsg = true;
  const errorMsg = "입력한 자격 정보에 오류가 있습니다."
  return (
    <div>
      {alertErrorMsg && <p>{errorMsg}</p>
      }
    </div>
  )
}

export default CondRender