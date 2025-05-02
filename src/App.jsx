import './App.css';

function App() {
  const zipCode = "17274";
  return (
    <>
      <p>우편번호: {zipCode}</p>
      <button style={{
        backgroundColor: "purple", color:
          "ivory"
      }}>클릭해!</button>
      <p className='card'>여러분 모두...</p>
    </>
  )
}

export default App
