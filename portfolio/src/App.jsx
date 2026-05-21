import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="container">

      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span>Surya Vamsi</span> 👋
        </h1>

        <h2>Frontend Developer | React Enthusiast</h2>

        <p>
          I build modern web applications and love creating
          clean user experiences.
        </p>

        <div className="buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
          >
            <FaGithub size={30}/>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
          >
            <FaLinkedin size={30}/>
          </a>
        </div>

      </motion.section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>Portfolio Website</h3>
          <p>React portfolio hosted on GitHub Pages</p>
        </div>

        <div className="card">
          <h3>Project 2</h3>
          <p>Add your projects here</p>
        </div>
      </section>

    </div>
  );
}

export default App;