import './App.css';

function AppJSX() {
  const name = '철민';
  const list = ['우유', '딸기', '바나나','요거트'];
  return (
    <>
      <h1 className='orange'>{`hello! ${name}`}</h1>
      <h2>Hellow</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
            <li>{item}</li>
          ))}
      </ul>
        <img 
        style={{ width: '200px', height: '200px'}}
        src="https://lh3.googleusercontent.com/XWuZGqIrIsaoKHUqqQ2rs_GhS5JaH1p5pPBIUpj22mjNRNdR3Ana8FKz4B7JwsA6HIFVXGuU7pa4ELiW6iUNhs0Iyg=s1280-w1280-h800"
        alt="nature"/>
    </>
  );
}

export default AppJSX;
