import './App.css';

function App() {
  const name = "범호랑이";
  const profession = "자바-리액트 풀스택 개발자"
  const projects = [
    {
      title: "오픈 소스 파킹(Open Source Parking)",
      description: "주차관제 제어체계 오픈 소스 프로젝트",
      link: "https://github.com/osparking/OsParking_src"
    },
    {
      title: "애완동물 병원 웹 앱 - 전단",
      description: "자바, 리액트, 마리아DB 사용 개발 프로젝트",
      link: "https://github.com/osparking/pet-care-front-react-java"
    },
    {
      title: "애완동물 병원 웹 앱 - 후단",
      description: "자바, 리액트, 마리아DB 사용 개발 프로젝트",
      link: "https://github.com/osparking/pet-care-react"
    }
  ]

  return (
    <div className='App'>
      {/* 헤더 구획 */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">소개</a>
          <a href="#project">프로젝트</a>
          <a href="#contact">연락</a>
        </nav>
      </header>
    </div>
  );
}

export default App
