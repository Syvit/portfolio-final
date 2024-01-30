import "./App.css";

function App() {
  return (
    <main>
      <div className="hero-background">
        <div
          className="overlay"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/overlay.jpeg)`,
          }}
        ></div>
      </div>
      <div className="element-container">
        <h1 className="hero-title">COLLIN TRUMPLER</h1>
        <About />
        <ProjectContainer />
        <StackContainer />
      </div>
    </main>
  );
}

function About() {
  return (
    <div className="about-container">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/self-portrait.png`}
        alt="self portrait"
      />
      <p>
        Hello! I'm Collin, a detail-oriented web developer passionate about
        turning creative ideas into interactive websites. I specialize in
        crafting user-friendly designs and efficient code. Constantly learning
        and adapting, I'm eager to collaborate on innovative projects. Let's
        build something extraordinary together!
      </p>
    </div>
  );
}

function ProjectContainer() {
  return (
    <aside className="project-container">
      <Project
        link="https://syvit.github.io/rock-paper-scissors/"
        path={`${process.env.PUBLIC_URL}/assets/images/NAT-website.png`}
      />
      <Project
        path={`${process.env.PUBLIC_URL}/assets/images/NAT-website.png`}
      />
      <Project
        path={`${process.env.PUBLIC_URL}/assets/images/NAT-website.png`}
      />
    </aside>
  );
}

function Project({ path, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="project"
        style={{ backgroundImage: `url(${path})` }}
      ></div>
    </a>
  );
}

function StackContainer() {
  return (
    <div className="stack-container">
      <div className="stack-group">
        <h2>MY STACK</h2>
        <Stack
          path={`${process.env.PUBLIC_URL}/assets/images/js-logo.png`}
          name="JavaScript"
        />
        <Stack
          path={`${process.env.PUBLIC_URL}/assets/images/react-logo.png`}
          name="React"
        />
        <Stack
          path={`${process.env.PUBLIC_URL}/assets/images/html-logo.png`}
          name="HTML"
        />
        <Stack
          path={`${process.env.PUBLIC_URL}/assets/images/css-logo.png`}
          name="CSS"
        />
      </div>
      <div className="stack-group">
        <h2>EXPERIENCE WITH</h2>
        <Stack
          path={`${process.env.PUBLIC_URL}/assets/images/python-logo.png`}
          name="Python"
        />
        <Stack
          path={`${process.env.PUBLIC_URL}/assets/images/typescript-logo.png`}
          name="TypeScript"
        />
        <Stack
          path={`${process.env.PUBLIC_URL}/assets/images/webpack-logo.png`}
          name="Webpack"
        />
      </div>
    </div>
  );
}

function Stack({ path, name }) {
  return <img className="stack-item" src={path} alt={name}></img>;
}

export default App;
