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

  const [cardURL, setCardURL] = useState(''); 

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
 
  const URL = "https://dev.adalab.es/api/projectCard/";

  const handlePost = (event) => {
    event.preventDefault();

    const dataToSend = {...addFormData, 
      name: addFormData.projectName,
      slogan: addFormData.slogan,
      repo: addFormData.repoLink,
      demo: addFormData.demoLink,
      technologies: addFormData.usedTechs,
      desc: addFormData.descriptions,
      autor: addFormData.userName,
      job: addFormData.userJob,
      // Asegúrate de que 'image' contenga una URL o un dato válido que la API espere
      photo: savedAvatar,
      image: savedImg
    };

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => {
        console.log("aprobado"); // Coloca aquí el console.log
        return response.json();
      })
      .then((result) => {
        //const cardURL = result.URL;
        if (result.success && result.URL) {
          setCardURL(result.URL);
        } else {
          // Manejar el error si la API devuelve 'success: false'
          console.error("Error en la respuesta de la API:", result.error);
        }
      })
      .catch((error) => console.error("Error al hacer la solicitud POST:", error));
  };
  

  return (
    <div className="container">
      <Header />

      <main className="main">
      
        <section className="hero">
          <div className="URLcontainer">
            {cardURL && <a href={cardURL} target="_blank" rel="noopener noreferrer">Ver Tarjeta</a>}  
          </div>
        
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
