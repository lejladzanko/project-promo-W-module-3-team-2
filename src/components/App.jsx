import { useState } from "react";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import "../scss/App.scss";

function App() {
  /*const [projectName, setProjectName] = useState("Personal Project Card");
  const [slogan, setSlogan] = useState("Elegant Workspace");
  const [repoLink, setRepoLink] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [usedTechs, setUsedTechs] = useState("React Js-HTML-CSS");
  const [descriptions, setDescriptions] = useState(
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur dolorem facere impedit aut voluptatibus nam recusandae totam adipisci illo consectetur optio nesciunt, unde natus ipsa similique asperiores ut quod quos?`
  );
  const [userName, setUserName] = useState("Emmelie Björklund");
  const [userJob, setUserJob] = useState("Full Stack Developer");*/

  const [updateAvatar, setUpdateAvatar] = useState(`url('/src/images/avatar.webp')`);
  const [addFormData, setAddFormData] = useState({

    projectName: "",
    slogan: "",
    repoLink: "",
    demoLink: "",
    usedTechs: "",
    descriptions: ``,
    userName: "",
    userJob: "",

  });


  const handleFormAdd = (event) => {
    const { name, value } = event.target;
    setAddFormData({
      ...addFormData,
      [name]: value
    });
  }


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
          addFormData={addFormData} setAddFormData={setAddFormData} updateAvatar={updateAvatar}
        />

        <Form handleFormAdd={handleFormAdd} addFormData={addFormData} setUpdateAvatar={setUpdateAvatar} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
