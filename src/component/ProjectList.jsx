function ProjectList() {

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
    <section id='project' className='project-section'>
      <h2>프로젝트</h2>
      <div className='project-list'>
        {projects.map((project, index) => (
          <div key={index} className='project-item'>
            <h3>{project.title}</h3>
            <h3>{project.description}</h3>
            <a href={project.link} target='_blank'
              rel="noopener noreferrer">프로젝트 보기</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;