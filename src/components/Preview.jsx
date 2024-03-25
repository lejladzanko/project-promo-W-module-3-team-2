import "../scss/components/Preview.scss";
import PropTypes from "prop-types";

function Preview({
  addFormData, updateAvatar, updateProjectImg, previewUrl }) {



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
          <p className="card__job">{addFormData.userJob || "Full Stack Developer"}</p>
          <h3 className="card__name">{addFormData.userName || "Emmelie Björklund"}</h3>
        </div>

        <div className="card__project">

          <h3 className="card__name">{addFormData.projectName || "Personal Project Card"}</h3>
          <p className="card__slogan">{addFormData.slogan || "Elegant Workspace"}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">{addFormData.descriptions || `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur dolorem facere impedit aut voluptatibus nam recusandae totam adipisci illo consectetur optio nesciunt, unde natus ipsa similique asperiores ut quod quos?`}</p>

          <a

            href={previewUrl}
            target="_blank"

          >{previewUrl}</a>

          <div className="card__technicalInfo">
            <p className="card__technologies">{addFormData.usedTechs || "React Js-HTML-CSS"}</p>

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
          </div>
        </div>
      </article>
    </section >
  );
}

Preview.propTypes = {
  addFormData: PropTypes.object.isRequired,
  updateAvatar: PropTypes.string.isRequired,
  updateProjectImg: PropTypes.string.isRequired
};

export default Preview;
