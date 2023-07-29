import "./reset.css"
import { Fragment } from "react";
import Header from "./Components/Header/Header";
import GlobalStyle from "./Global";
import Container from "./Components/Contenedor/Container";
import Footer from "./Components/Footer/Footet";
import { useState } from "react";

function App() {
  const [location,setlocation] = useState("Helsinki")
  const enviarID = (e) => {
    setlocation(e.target.id) 
}
  return (
    <Fragment>
      <GlobalStyle/>
      <Header location={location} enviarID={enviarID}/>
      <Container location={location}/>
      <Footer/>
    </Fragment>
  );
}

export default App;
