//import Button from "./Button";
import GetAvatar from "./GetAvatar";
import "../scss/components/Form.scss";
import PropTypes from "prop-types";

function Form({ handleFormAdd, addFormData, setUpdateAvatar, setProjectImg, handlePost, previewUrl
}) {


  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <span className="mandatoryInputs">Los campos marcados con * son obligatorios</span>
        <input className="addForm__input" type="text"
          name="projectName"
          value={addFormData.projectName}
          id="name"
          placeholder="Nombre del proyecto *" onChange={handleFormAdd} />
        <input className="addForm__input" type="text"
          name="slogan"
          value={addFormData.slogan}
          id="slogan"
          placeholder="Slogan"
          onChange={handleFormAdd} />
        <div className="addForm__2col">
          <input className="addForm__input" type="url"
            name="repoLink"
            value={addFormData.repoLink}
            id="repo"
            placeholder="Repositorio *"
            onChange={handleFormAdd} />
          <input className="addForm__input" type="url"
            name="demoLink"
            value={addFormData.demoLink}
            id="demo"
            placeholder="Demo"
            onChange={handleFormAdd} />
        </div>
        <input className="addForm__input" type="text"
          name="usedTechs"
          value={addFormData.usedTechs}
          id="technologies"
          placeholder="Tecnologías"
          onChange={handleFormAdd} />
        <textarea className="addForm__input" type="text"
          name="descriptions"
          value={addFormData.descriptions}
          id="desc"
          placeholder="Descripción *"
          rows="5"
          onChange={handleFormAdd} ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input className="addForm__input"
          type="text"
          value={addFormData.userName}
          name="userName" id="autor"
          placeholder="Nombre *"
          onChange={handleFormAdd} />
        <input className="addForm__input" type="text"
          name="userJob"
          value={addFormData.userJob}
          id="job"
          placeholder="Trabajo *"
          onChange={handleFormAdd} />
      </fieldset>
      <fieldset className="addForm__group--upload">
        <div className="buttons-upload-container">
        <GetAvatar setUpdateAvatar={setProjectImg} text="Subir foto del proyecto" />
        <GetAvatar setUpdateAvatar={setUpdateAvatar} text="Subir foto de la autora" />
        </div>
       
        <div className="buttons-container">
          <button className="button--large" onClick={handlePost}>Guardar proyecto</button>
          {previewUrl && (
            <div className="URLcontainer">
              <a href={previewUrl} target="_blank">Ver Tarjeta</a>
            </div>
          )}
        </div>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  handleFormAdd: PropTypes.func.isRequired,
  addFormData: PropTypes.object.isRequired,
  setUpdateAvatar: PropTypes.func.isRequired,
  setProjectImg: PropTypes.func.isRequired,
  handlePost: PropTypes.func.isRequired,
}
export default Form;


