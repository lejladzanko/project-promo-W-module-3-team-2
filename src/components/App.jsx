import { useState, useEffect } from "react";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import "../scss/App.scss";

function App() {
  const savedAvatar =
    JSON.parse(localStorage.getItem("avatar")) ||
    `url('/src/images/avatar.webp')`;

  const savedImg =
    JSON.parse(localStorage.getItem("img")) ||
    `url('/src/images/illustration.png'`;

  const savedForm = JSON.parse(localStorage.getItem("form")) || {
    projectName: "",
    slogan: "",
    repoLink: "",
    demoLink: "",
    usedTechs: "",
    descriptions: ``,
    userName: "",
    userJob: "",
  };

  const [updateAvatar, setUpdateAvatar] = useState(savedAvatar);

  const [updateProjectImg, setProjectImg] = useState(savedImg);

  const [addFormData, setAddFormData] = useState(savedForm);

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(addFormData));
    localStorage.setItem("avatar", JSON.stringify(updateAvatar));
    localStorage.setItem("img", JSON.stringify(updateProjectImg));
  }, [addFormData, updateAvatar, updateProjectImg]);

  const handleFormAdd = (event) => {
    const { name, value } = event.target;
    setAddFormData({
      ...addFormData,
      [name]: value,
    });
  };

  //URL
  let URL = "https://dev.adalab.es/api/projectCard/";

  const handlePost = (event) => {
    event.preventDefault();

    fetch("https://dev.adalab.es/api/projectCard/", {
      method: "POST",
      body: JSON.stringify(addFormData),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => {
        console.log("aprobado"); // Coloca aquí el console.log
        return response.json();
      })
      .then((result) => {
        result.URL;
        console.log(result.URL);
      })
      .catch((error) => console.log(error));
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
          addFormData={addFormData}
          setAddFormData={setAddFormData}
          updateAvatar={updateAvatar}
          updateProjectImg={updateProjectImg}
        />

        <Form
          handleFormAdd={handleFormAdd}
          addFormData={addFormData}
          setUpdateAvatar={setUpdateAvatar}
          setProjectImg={setProjectImg}
          handlePost={handlePost}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
