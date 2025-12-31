import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaHandsClapping } from "react-icons/fa6";
import './App.css'

function App() {

  return (
     <div className='bg-container'>
      <header>
        <h2>Bhanu Prakash</h2>
        <nav>
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
      </header>
      <main>
          <section className="self-intro">
           <div>
            <h1>Hi, I'am Bhanu Prakash <FaHandsClapping/> </h1>
            <p className="role-para">Full Stack Developer | MERN Stack | Passionate about clean code<br/>& modern UI</p>
            
            <a href="https://github.com/Bhanu-techy" target="_blank"><button className="view-btn">View Projects</button></a>
            
           </div>
          </section>
          <section id="About"  className="section container">
                <div >
                  <h2>About Me</h2>
                  <p>I'm a dedicated Full Stack Developer with hands-on experience in React, Node.js and SQL. I specialize in building responsive apps with elegant UI and clean code architecture. As a fresher currently Looking for a job and Eager to apply my knowledge in real-world projects and continuously grow as a developer</p>
                </div>
          </section>
          <section id="Skills" className="container">
              <div>
                <h2>Skills</h2>
                <ul  className="section">
                  <li className="skill">HTML5</li>
                  <li className="skill">CSS3</li>
                  <li className="skill">JavaScript</li>
                  <li className="skill">Python(OOP)</li>
                  <li className="skill">React.js</li>
                  <li className="skill">Node.js</li>
                  <li className="skill">Express.js</li>
                  <li className="skill">MongoDB</li>
                  <li className="skill">SQLite</li>
                  <li className="skill">REST APIs</li>
                  <li className="skill">Git & GitHub</li>
                </ul>
              </div>
          </section>
          <section id="Projects" className="container">
            <div className="projects-div">
              <h2>Projects</h2>
              <div className="projects">
                <div  className="project">
                  <h3>Insta Share</h3>
                  <p>React app with with user profiles and serach and like interactivity.</p>
                  <a className="info">View Code</a>
                </div>
                <div  className="project">
                  <h3>Insta Share</h3>
                  <p>React app with with user profiles and serach and like interactivity.</p>
                  <a className="info">View Code</a>
                </div>
                <div  className="project">
                  <h3>Insta Share</h3>
                  <p>React app with with user profiles and serach and like interactivity.</p>
                  <a className="info">View Code</a>
                </div>
              </div>
            </div>
          </section>
          <section id="Contact"  className="contact-div">
            <div>
              <h2>Contact</h2>
              <p>Email: <span className="info">bhanuprakashdevari@gmail.com</span></p>
              <p>GitHub: <a className="info" href="https://github.com/Bhanu-techy" target="_blank">github.com/Bhanu-techy</a></p>
              <p>Linedin: <a className="info">linkedin.com</a></p>
            </div>
          </section>
        </main>
        <hr/>
      <footer>
        <p>@ Bhanu Prakash - Crafted with <FcLike/> & pure HTML + CSS</p>
      </footer>
     </div>
  )
}

export default App
