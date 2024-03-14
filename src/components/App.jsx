import { useState } from "react";
import '../scss/App.scss';
//Importar las fotos
import logoAdalab from '../images/adalab.png';
import avatar from '../images/avatar.webp';
import ebookImg from '../images/ebook-example.jpg';
import gitHubIcon from '../images/github.svg';
import globeIcon from '../images/globe-solid.svg';
import laptopIcon from '../images/laptop-code-solid.svg';


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

      <header className="header">
        <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
          <img className="header__companyLogo" src={laptopIcon} alt="Logo proyectos molones" />
          <h1 className="header__title">Proyectos molones</h1>
        </a>
        <img className="logoSponsor" src={logoAdalab} alt="Logo Adalab" />
      </header>

      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
          <a className="button--link" href="./">Ver proyectos</a>
        </section>

        <section className="preview">
          <div className="projectImage"></div>
          <article className="card">
            <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal Project Card</span></h2>

            <div className="card__author">
              <div className="card__authorPhoto"></div>
              <p className="card__job">
                {userJob}
              </p>
              <h3 className="card__name">{userName}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{projectName}</h3>
              <p className="card__slogan">{slogan}</p>
              <h3 className="card__descriptionTitle">Product description</h3>
              <p className="card__description">{descriptions}</p>

              <div className="card__technicalInfo">
                <p className="card__technologies">{usedTechs}</p>

                <a className="icon icon__www" href={repoLink} target="_blank" title="Haz click para ver el proyecto online">
                  Web link
                </a>
                <a className="icon icon__github" href={demoLink} target="_blank" title="Haz click para ver el código del proyecto">
                  GitHub link
                </a>
              </div>
            </div>
          </article>
        </section>
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
            <label htmlFor="image" className="button">Subir foto del proyecto</label>
            <input className="addForm__hidden" type="file" name="image" id="image" />
            <label htmlFor="photo" className="button">Subir foto de la autora</label>
            <input className="addForm__hidden" type="file" name="photo" id="photo" />
            <button className="button--large">Guardar proyecto</button>
          </fieldset>

        </form>
      </main>

      <footer className="footer">
        <img className="logoSponsor" src={logoAdalab} alt="Logo Adalab" />
      </footer>
    </div>
  );
}

export default App;
