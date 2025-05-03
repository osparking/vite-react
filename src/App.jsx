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
      {/* 소개 구획 */}
      <section id='about' className='about-section'>
        <h2>자기 소개</h2>
        <p>안녕하세요? 제 이름은 {name}이고, 저는 직업 군인이었으나 
          전역 후 자바-리액트 웹앱 개발에 진심인 남성입니다.</p>
      </section>

      {/* 프로젝트 구획 */}
      <section id='project' className='project-section'>
        <h2>프로젝트</h2>
        <div className='project-list'>
          {projects.map((project, index) => (
            <div key={index} className='project-item'>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App
