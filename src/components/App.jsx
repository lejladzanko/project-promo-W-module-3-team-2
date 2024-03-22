import { useState } from "react";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import "../scss/App.scss";

function App() {


  const [updateAvatar, setUpdateAvatar] = useState(`url('/src/images/avatar.webp')`);

  const [updateProjectImg, setProjectImg] = useState(`url('/src/images/illustration.png')`);

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
          updateProjectImg={updateProjectImg}

        />

        <Form handleFormAdd={handleFormAdd} addFormData={addFormData} setUpdateAvatar={setUpdateAvatar}
          setProjectImg={setProjectImg}

        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
