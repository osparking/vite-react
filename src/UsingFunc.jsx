import React from 'react'

const printLastname = function (lastname) {
  return <p>당신의 성씨는: {lastname}</p>
}
const UsingFunc = () => {
  const names = ['김', '이', '박'];

  return (
    <div>
      {names.map((name) => printLastname(name)
      )}
    </div>
  )
}

export default UsingFunc