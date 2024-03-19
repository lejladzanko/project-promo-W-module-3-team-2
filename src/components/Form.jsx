import Button from "./Button";
import "../scss/components/Form.scss";
import PropTypes from "prop-types";

function Form({handleUserName, handleUserJob, handleProjectName, handleSlogan, handleRepoLink, handleDemoLink, handleTechnologies, handleDescription}) {
  return (
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
  );
}

Form.propTypes = {
    handleUserName: PropTypes.func.isRequired,
    handleUserJob: PropTypes.func.isRequired,
    handleProjectName: PropTypes.func.isRequired,
    handleSlogan: PropTypes.func.isRequired, 
    handleRepoLink: PropTypes.func.isRequired,
    handleDemoLink: PropTypes.func.isRequired,
    handleTechnologies: PropTypes.func.isRequired,
    handleDescription: PropTypes.func.isRequired,
}
export default Form;


