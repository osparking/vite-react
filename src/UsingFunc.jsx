import React from 'react'

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

const UsingFunc = () => {
  const names = ['김', '이', '박'];
  const isMorning = (new Date()).getHours() < 12;

  return (
    <div>
      <p>{greetCheckingTime(isMorning)}</p>
    </div>
  )
}

export default UsingFunc