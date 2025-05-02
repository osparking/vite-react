import './App.css';

function App() {
  const greet = <h1>안녕?</h1>;
  return (
    <>
      { greet }
      {2000 + 25}년
      <p className='card'>여러분 모두...</p>
    </>
  )
}

export default App
