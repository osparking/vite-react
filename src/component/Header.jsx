import React from 'react'

const Header = () => {
  const name = "범호랑이";
  const profession = "자바-리액트 풀스택 개발자"  
  
  return (
    <header className='header'>
      <h1>{name}</h1>
      <p>{profession}</p>
      <nav>
        <a href="#about">소개</a>
        <a href="#project">프로젝트</a>
        <a href="#contact">연락</a>
      </nav>
    </header>
  )
}

export default Header