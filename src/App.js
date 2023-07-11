import "./reset.css"
import { Fragment } from "react";
import Header from "./Components/Header/Header";
import GlobalStyle from "./Global";
import Card from "./Components/Card/Card";

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Header/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </Fragment>
  );
}

export default App;
