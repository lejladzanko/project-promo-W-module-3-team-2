import { useState, useEffect } from "react";
import defaultAvatar from "../images/avatar.webp";
import defaultImg from "../images/illustration.png";
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
  const [previewUrl, setPreviewUrl] = useState("");

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

  const handlePost = (event) => {
    event.preventDefault();
    console.log("clicko");

    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: addFormData.projectName,
        slogan: addFormData.slogan || " ",
        technologies: addFormData.usedTechs || " ",
        demo: addFormData.demoLink || " ",
        repo: addFormData.repoLink,
        desc: addFormData.descriptions,
        autor: addFormData.userName,
        job: addFormData.userJob,
        image: updateProjectImg,
        photo: updateAvatar,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit project data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.cardURL) {
          setPreviewUrl(data.cardURL);
        } else {
          console.error(
            "El campo cardURL no está presente en la respuesta de la API"
          );
        }
      })
      .catch((error) => {
        console.error("Error submitting project data:", error);
      });
  };

  const handleReset = () => {
    setUpdateAvatar(defaultAvatar);
    setProjectImg(defaultImg);
    setAddFormData({
      projectName: "",
      slogan: "",
      repoLink: "",
      demoLink: "",
      usedTechs: "",
      descriptions: ``,
      userName: "",
      userJob: "",
    });
    setPreviewUrl("");
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
          handleReset={handleReset}
        />

        <Form
          handleFormAdd={handleFormAdd}
          addFormData={addFormData}
          setUpdateAvatar={setUpdateAvatar}
          setProjectImg={setProjectImg}
          handlePost={handlePost}
          previewUrl={previewUrl}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
