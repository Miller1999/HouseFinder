import "./reset.css"
import { Fragment } from "react";
import Header from "./Components/Header/Header";
import GlobalStyle from "./Global";
import Container from "./Components/Contenedor/Container";
import Footer from "./Components/Footer/Footet";

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Header/>
      <Container/>
      <Footer/>
    </Fragment>
  );
}

export default App;
