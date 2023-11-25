import './App.css';

function MyButton(){
  function button(){
    alert('You clicked me');
  }
  return(
    <button onclick={button}>Text Me </button>
  );
}

const profile = {
    name : 'Prakash Dass R',
    imageUrl : 'chrome://branding/content/about-logo.png',
    imageSize : 90,
};

const skills = [
  {title : 'Django',LevelofKnowledge : 'Intermediate'},
  {title : 'React', LevelofKnowledge : 'Begginer'},
  {title : 'Python',LevelofKnowledge : 'Intermediate'}
];

function SkillSection() {
    const Listofskills = skills.map(skill =>
       <li key={skill.title} style={{
        color:skill.LevelofKnowledge === 'Begginer' ? 'Blue' : 'black'
       }}>{skill.title} {skill.LevelofKnowledge}</li>
    );
    return(
      <ol>{Listofskills}</ol>
    );
}

function Profile() {
  return(
    <>
    <h1>{profile.name}</h1>
    <img src={profile.imageUrl} alt='profile of' {...profile.name} style = {{
      width : profile.imageSize
    }}></img>
    </>
  );
}

function App() {
  return (
    <div className="header">
      <Profile/>
      <header className="App-header">Profile of {profile.name} <MyButton/></header>
      <p><SkillSection/></p>
    </div>
  );
}




export default App;
