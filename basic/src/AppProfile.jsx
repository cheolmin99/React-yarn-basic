import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('클릭됨');
  };
  return (
    <>
    <button onClick={handleClick}>버튼</button>
    <Avatar 
      image="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fea%2Fd5%2F86%2Fead58647a820974def08455b2d2ce70c.jpg&type=a340"
      isNew={true}
    />
      <Profile
        image='https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fea%2Fd5%2F86%2Fead58647a820974def08455b2d2ce70c.jpg&type=a340'
        name='Elie'
        title='프론트엔드 개발자'
        isNew={true}
      />
      <Profile
        image='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTExMjhfMTQz%2FMDAxNTc0OTQzMTkxMjg2.VIXTIT6lQtex8AogU23xCFHhwUaGay-lBfB6LTIyx4Eg.Vv11toBhhrrR5BGA9bOHHQ4nvjimsl6ltigdC-2WUtEg.JPEG.imagelab01%2F%25BF%25DC%25B1%25B9%25C0%25CE_%25B8%25F0%25B5%25A8_%25C1%25F6%25B8%25C1%25BB%25FD_%25C7%25C1%25B7%25CE%25C7%25CA9.jpg&type=a340'
        name='Jhone'
        title='백엔드 개발자'
      />
      <Profile
        image='https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F609%2F2020%2F07%2F01%2F202007010819312410_7_20200701082114665.jpg&type=a340'
        name='Anna Young'
        title='디자이너'
      />
    </>
  );
}

export default AppProfile;
