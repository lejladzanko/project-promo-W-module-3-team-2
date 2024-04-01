import "../scss/components/Preview.scss";
import PropTypes from "prop-types";

function Preview({
  addFormData, updateAvatar, updateProjectImg, previewUrl, handleReset, }) {


  return (
    <section className="preview">
      <div className="projectImage" style={{ backgroundImage: `url(${updateProjectImg})` }}>  </div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            Personal Project Card
          </span>
        </h2>

        <div className="card__author">
          <div className="card__authorPhoto" style={{ backgroundImage: `url(${updateAvatar})` }}>  </div>
          <p className="card__job">{addFormData.userJob || "Professional Baroque Artist"}</p>
          <h3 className="card__name">{addFormData.userName || "Diego Velázquez"}</h3>
        </div>

        <div className="card__project">

          <h3 className="card__name">{addFormData.projectName || "Personal Project Card"}</h3>
          <p className="card__slogan">{addFormData.slogan || "“Velázquez: Donde la grandeza de la corte cobra vida en el lienzo.”"}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">{addFormData.descriptions || `Designado por la corte de Carlos III, me enfrento al reto de plasmar “Las Meninas”, un proyecto donde arte y visión de la corte se entrelazan. Como Diego Velázquez, utilizo técnicas de claroscuro y perspectiva para capturar la complejidad y el esplendor del entorno, con cada figura meticulosamente posicionada reflejando las expectativas de mis mecenas, los verdaderos Product Owners. Este lienzo es mi campo de trabajo, donde cada pincelada une técnica y narrativa en una obra maestra destinada a perdurar.`}</p>

          <a

            href={previewUrl}
            target="_blank"

          >{previewUrl}</a>

          <div className="card__technicalInfo">
            <p className="card__technologies">{addFormData.usedTechs || "Oil painting"}</p>

            <a
              className="icon icon__www"
              href={addFormData.demoLink}
              target="_blank"
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={addFormData.repoLink}
              target="_blank"
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
            <button type="button" className="button-reset" onClick={handleReset}>Reiniciar</button>
          </div>
        </div>
      </article>
    </section >
  );
}

Preview.propTypes = {
  addFormData: PropTypes.object.isRequired,
  updateAvatar: PropTypes.string.isRequired,
  updateProjectImg: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired
};

export default Preview;
