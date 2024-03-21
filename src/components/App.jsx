import { useState } from "react";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import "../scss/App.scss";

function App() {
  const [projectName, setProjectName] = useState("Personal Project Card");
  const [slogan, setSlogan] = useState("Elegant Workspace");
  const [repoLink, setRepoLink] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [usedTechs, setUsedTechs] = useState("React Js-HTML-CSS");
  const [descriptions, setDescriptions] = useState(
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur dolorem facere impedit aut voluptatibus nam recusandae totam adipisci illo consectetur optio nesciunt, unde natus ipsa similique asperiores ut quod quos?`
  );
  const [userName, setUserName] = useState("Emmelie Björklund");
  const [userJob, setUserJob] = useState("Full Stack Developer");
  const [updateAvatar, setUpdateAvatar] = useState(`url('/src/images/avatar.webp')`);

  const handleProjectName = (event) => {
    setProjectName(event.target.value);
    console.log(projectName);
  };
  const handleSlogan = (event) => {
    setSlogan(event.target.value);
  };
  const handleRepoLink = (event) => {
    setRepoLink(event.target.value);
  };
  const handleDemoLink = (event) => {
    setDemoLink(event.target.value);
  };
  const handleTechnologies = (event) => {
    setUsedTechs(event.target.value);
  };
  const handleDescription = (event) => {
    setDescriptions(event.target.value);
  };
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleUserJob = (event) => {
    setUserJob(event.target.value);
  };

  return (
    <div className="container">
      <Header />

      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <a className="button--link" href="./">
            Ver proyectos
          </a>
        </section>

        <Preview
          userJob={userJob}
          userName={userName}
          projectName={projectName}
          slogan={slogan}
          descriptions={descriptions}
          usedTechs={usedTechs}
          repoLink={repoLink}
          demoLink={demoLink}
          updateAvatar={updateAvatar}
        />

        <Form 
          handleUserName={handleUserName} 
          handleUserJob={handleUserJob} 
          handleProjectName={handleProjectName} 
          handleSlogan={handleSlogan} 
          handleRepoLink={handleRepoLink} 
          handleDemoLink={handleDemoLink} 
          handleTechnologies={handleTechnologies} 
          handleDescription={handleDescription} 
          setUpdateAvatar={setUpdateAvatar}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
