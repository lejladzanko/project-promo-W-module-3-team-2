import { useState } from "react";
import Header from "./Header";
import Preview from "./Preview";
import Button from "./Button";
import Footer from "./Footer";
import '../scss/App.scss';



function App() {

  const [projectName, setProjectName] = useState("Personal Project Card");
  const [slogan, setSlogan] = useState("Elegant Workspace");
  const [repoLink, setRepoLink] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [usedTechs, setUsedTechs] = useState("React Js-HTML-CSS");
  const [descriptions, setDescriptions] = useState(`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur dolorem facere impedit aut voluptatibus nam recusandae totam adipisci illo consectetur optio nesciunt, unde natus ipsa similique asperiores ut quod quos?`);
  const [userName, setUserName] = useState("Emmelie Björklund");
  const [userJob, setUserJob] = useState("Full Stack Developer");


  const handleProjectName = (event) => {

    setProjectName(event.target.value);
    console.log(projectName);
  }
  const handleSlogan = (event) => {

    setSlogan(event.target.value);
  }
  const handleRepoLink = (event) => {

    setRepoLink(event.target.value);
  }
  const handleDemoLink = (event) => {

    setDemoLink(event.target.value);
  }
  const handleTechnologies = (event) => {

    setUsedTechs(event.target.value);
  }
  const handleDescription = (event) => {

    setDescriptions(event.target.value);
  }
  const handleUserName = (event) => {

    setUserName(event.target.value);
  }
  const handleUserJob = (event) => {

    setUserJob(event.target.value);
  }

  return (
    <div className="container">

      <Header/>

      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
          <a className="button--link" href="./">Ver proyectos</a>
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
        />

        <form className="addForm">
          <h2 className="title">Información</h2>
          <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
            <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleProjectName} />
            <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleSlogan} />
            <div className="addForm__2col">
              <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleRepoLink} />
              <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleDemoLink} />
            </div>
            <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleTechnologies} />
            <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleDescription} ></textarea>
          </fieldset>

          <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre la autora</legend>
            <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleUserName} />
            <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleUserJob} />
          </fieldset>
          <fieldset className="addForm__group--upload">
            <Button text="Subir foto del proyecto"/>
            <Button text="Subir foto de la autora"/>
            <button className="button--large">Guardar proyecto</button>
          </fieldset>
        </form>
      </main>

    <Footer/>
    </div>
  );
}

export default App;
