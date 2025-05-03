import React from 'react';

const printLastname = function (lastname) {
  return <p>당신의 성씨는: {lastname}</p>
}

const greetCheckingTime = (isMorning) => {
  let msg = "즐거운 하루";
  if (isMorning) {
    msg ="좋은 아침~"
  }
  return msg;
}

const alertBox = function(msg) {
  return <div style={{color: "red"}}>{msg}</div>;
}

const selectiveDiv = (flag, msg) => {
  if (flag) {
    return alertBox(msg);
  } 
  return null;
}

const UsingFunc = () => {
  return (
    // 여기 주석이 올 수 있고,
    <div>
      {/* 여기는 div 안 이므로 JSX 방법으로 주석을 달라.
        줄을 바꾸면 다중 행 주석이 된다. */}
      {selectiveDiv(true, "비오니까 우산 지참해!")}
      {selectiveDiv(false, "싫으면, 관두고 :-)")}
    </div>
  )
}

export default UsingFunc