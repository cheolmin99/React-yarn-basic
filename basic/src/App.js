import './App.css';

function App() {
  const name = '철민';
  return (
    <>
      <h1 className='orange'>Hellow</h1>
      <h2>Hellow</h2>
      <p>{name}</p>
      <ul>
        <li>우유</li>
        <li>딸기</li>
        <img 
        style={{ width: '200px', height: '200px'}}
        src="https://lh3.googleusercontent.com/XWuZGqIrIsaoKHUqqQ2rs_GhS5JaH1p5pPBIUpj22mjNRNdR3Ana8FKz4B7JwsA6HIFVXGuU7pa4ELiW6iUNhs0Iyg=s1280-w1280-h800"
        alt="nature"/>
      </ul>
    </>
  );
}

export default App;
