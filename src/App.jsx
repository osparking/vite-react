import './App.css';

function App() {
  const zipCode = "17274";
  const buttonStyle = {
    backgroundColor: "purple", color:
      "ivory"
  }
  const imageUrl = "https://placehold.co/120x80";
  return (
    <>
      <img src={imageUrl} alt="위치/크기 지정 영상" />
      <p>우편번호: {zipCode}</p>
      <button style={buttonStyle}>클릭해!</button>
      <p>우편번호: {zipCode}</p>
      <button
        style={buttonStyle}
        onClick={() => alert('참 잘했어요')}>클릭해!</button>
      <p className='card'>여러분 모두...</p>
    </>
  )
}

export default App
