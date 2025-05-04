import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import ProjectList from './component/ProjectList';

function App() {
  return (
    <div className='App'>
      {/* 헤더 구획 */}
      <Header />

      {/* 소개 구획 */}
      <About />

      {/* 프로젝트 구획 */}
      <ProjectList />

      {/* 연락처 구획 */}
      <Contact />

      {/* 바닥글 구획 */}
      <Footer />

    </div>
  );
}

export default App;
