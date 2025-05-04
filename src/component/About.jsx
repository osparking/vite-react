import React from 'react'

const About = () => {
  const name = "범호랑이";
  return (
    <section id='about' className='about-section'>
      <h2>자기 소개</h2>
      <p>안녕하세요? 제 이름은 {name}이고, 저는 직업 군인이었으나
        전역 후 자바-리액트 웹앱 개발에 진심인 남성입니다.</p>
    </section>
  )
}

export default About;