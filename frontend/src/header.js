import './header.css';

// function Header({children}){
//     return (
//       <div className='header-container'>
//         {/* Children will occor without video */}
//         <video className='banner-video' src={require('./images/bannerVid.mp4')} alt="VideoBanner" autoPlay loop></video>
//         <TopNav></TopNav>
//       </div>
//     );
// }

// function Button({onClick}){
//   return (
//     <button onClick={onClick} style={{
//       padding : "10px",
//       color : "black",
//       "zIndex" : 9999,
//     }}>Click Me!</button>
//   );
// }

export default function TopNav(){
    return (
        <header className="">
            <ul className="nav">
                <li className="nav ele"><a  href='#about'>About</a></li>
                <li className="nav ele"><a  href='#skills'>Skills</a></li>
                <li className="nav ele"><a  href='#contact'>Contact Me</a></li>
                <li className="nav ele"><a  href='#social-media'>Social Media</a></li>
                <li className="nav ele"><a  href='#projects'>Projects</a></li>
            </ul>
        </header>
    );
  }

// export default Header;