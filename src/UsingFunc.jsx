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

const selectiveDiv = (flag, msg) => {
  if (flag) {
    return <div>{msg}</div>;
  } 
  return null;
}

const UsingFunc = () => {
  return (
    <div>
      {selectiveDiv(true, "비오니까 우산 가지고 나가")}
      {selectiveDiv(false, "싫으면, 관두고 :-)")}
    </div>
  )
}

export default UsingFunc