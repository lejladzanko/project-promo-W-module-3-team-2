import "../scss/components/Preview.scss";
import PropTypes from "prop-types";

function Preview({
  userJob,
  userName,
  projectName,
  slogan,
  descriptions,
  usedTechs,
  repoLink,
  demoLink,
  updateAvatar
}) {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            Personal Project Card
          </span>
        </h2>

        <div className="card__author">
          <div className="card__authorPhoto" style={{backgroundImage: `url(${updateAvatar})`}}></div>
          <p className="card__job">{userJob}</p>
          <h3 className="card__name">{userName}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">{projectName}</h3>
          <p className="card__slogan">{slogan}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">{descriptions}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{usedTechs}</p>

            <a
              className="icon icon__www"
              href={demoLink}
              target="_blank"
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={repoLink}
              target="_blank"
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

Preview.propTypes = {
  userJob: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired,
  usedTechs: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  updateAvatar: PropTypes.string.isRequired
};

export default Preview;
